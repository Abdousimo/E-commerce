import React from 'react'

const Hero = () => {
    console.log(`${process.env.NEXT_PUBLIC_REST_API_KEY}`)
  return (
    <section className="bg-gray-50 lg:h-[calc(100vh-80px)] mt-20">
  <div className="container mx-auto max-w-screen-xl py-32 lg:flex">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-4xl">
        All Your Degital Products
        <strong className="font-extrabold text-primary sm:block"> Is One Click Away </strong>
      </h1>

      <p className="mt-4 sm:text-lg/relaxed">
        Start Exploring State Of The Art Assets Now ! 
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary_hover duration-200 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow sm:w-auto hover:bg-gray-100 duration-200"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero