"use client";
import React, { useEffect ,useState} from 'react' 
import { getProductByCategory, getProductById } from '../../_utils/ProductApi'
import ProductBanner from '../_components/ProductBanner'
import ProductInfo from '../_components/ProductInfo'
import ProductListCategory from '../_components/ProductListCategory'
import { usePathname } from 'next/navigation'
import BreadCrumb from '../../_components/BreadCrumb'


const ProductDetails  = ({params}) => {
    const path = usePathname()
    const [productDetails,setProductDetails] = useState({})
    const [productListCategory,setProductListCategory] = useState([])
    
    const getProductListCategory = async (product) => {
          await getProductByCategory(product?.attributes?.category)
          .then(res => setProductListCategory(res.data.data))
    }
    
    const getProductById_ = async () => {
        await getProductById(params.id).then(
            res=> {
              setProductDetails(res.data.data)
              getProductListCategory(res.data.data)
            }
          )
    }

   

    useEffect(()=>{
      getProductById_()
    },[])

  return (
    <>
    <div className='container py-16 mt-20'>
         <BreadCrumb path={path}/>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 mt-10'>
           <ProductBanner product={productDetails}/>
           <ProductInfo product={productDetails}/>
         </div>
    </div>
    <ProductListCategory productList={productListCategory}/>
    </>
  )
}

export default ProductDetails