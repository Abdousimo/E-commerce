import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useState,useContext } from 'react';
import { CartContext } from '../_context/CartContext';
import { useUser } from '@clerk/nextjs';
import { deleteCartItem } from '../_utils/CartApis';
import {createOrder} from '../_utils/OrderApis';
import Loading from '../_components/Loading'

const CheckoutForm = ({amount}) => {
  const { cart, setCart } = useContext(CartContext)
	const { user } = useUser() 
  const [loading,setLoading] = useState(false)
  const [errorMessage,setErrorMessage] = useState()
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {

      // We don't want to let default form submission happen here,
      // which would refresh the page.
      event.preventDefault();
      setLoading(true)
  
      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }
  
      const handleError = (error) => {
        setLoading(false)
        setErrorMessage(error.message)
      }
      
      //create a new order
      createOrder_()
      //send email
      sendEmail()
      const { error: submitError } = await elements.submit();
		if (submitError) {
			handleError(submitError);
			return;
		}
  
      const res = await fetch('api/create-intent',{
        method:'POST',
        body:JSON.stringify({
          amount
        })
      })

      const clientSecret  = await res.json()

      const result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        clientSecret,
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/payement-confirm",
        },
      });
  
      if (result.error) {
        // Show error to your customer (for example, payment details incomplete)
        console.log(result.error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
      setLoading(false)
    };
  
    const createOrder_ = () => {
      let productIds = [];
      cart.forEach(el => {
        productIds.push(el?.product?.id)
      })
      
      const data = {
        data: {
          email: user.primaryEmailAddress.emailAddress,
          username: user.fullName,
          amount,
          products: productIds
        }
      }
      createOrder(data).then((res) => {
        if (res) {
          cart.forEach(el => {
            deleteCartItem(el?.id).then(result => {
  
            })
          })
        }
      })
    }

    const sendEmail = async () => {
      const res = await fetch('api/send-email',{
        method:'POST',
        body: JSON.stringify({
          amount: amount,
          email: user.primaryEmailAddress.emailAddress,
          fullName: user.fullName
        })
      })
    }
    
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className='mx-20 md:mx-[320px] mt-24'>
      <PaymentElement />
      <button disabled={!stripe} className='bg-primary text-white rounded-md p-2 w-full mt-6 hover:bg-primary_hover duration-500 font-semibold'>Submit</button>
      </div>
    </form>
    {loading&&<Loading/>}
    </>
  );
};

export default CheckoutForm;