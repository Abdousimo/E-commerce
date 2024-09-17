import { SignIn } from "@clerk/nextjs";
import Image from "next/image";


export default function Page(){
    return(
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                <img
                    alt=""
                    src="/bb.jpg"
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                />

                <div className="hidden lg:relative lg:block lg:p-12">
                    <a className="text-white flex items-center gap-3" href="/">
                    
                        <div className="bg-white p-2 rounded-full w-fit">
                            <Image
                            src={'/logo.svg'}
                            alt="/"
                            width={50}
                            height={50}
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                        Welcome to Squid 🦑
                        </h2>
                    </a>


                    <p className="mt-4 leading-relaxed text-white/90">
                    Unlock a world of personalized experiences by signing in today! Whether you're looking to access exclusive content, save your progress, or enjoy a seamless experience across all your devices, signing in gives you instant access to all the features and benefits tailored just for you. Don't miss out—sign in now and elevate your experience!
                    </p>
                </div>
                </section>

                <main
                className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                <div className="max-w-xl lg:max-w-3xl">
                    <div className="relative -mt-16 block lg:hidden">
                    <a
                        className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                        href="#"
                    >
                        <span className="sr-only">Home</span>
                        <Image
                        src={'/logo.svg'}
                        alt="/"
                        width={50}
                        height={50}
                        />
                    </a>

                    <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                        Welcome to Squid 🦑
                    </h1>

                    <p className="mt-4 leading-relaxed text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                        quibusdam aperiam voluptatum.
                    </p>
                    </div>

                <div className="flex items-center justify-center py-8 lg:py-0">
                    <SignIn/>
                </div>
                </div>
                </main>
            </div>
        </section>
    ) 
}