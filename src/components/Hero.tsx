"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// import { AuroraBackground } from '@/components/ui/AuroraBg';

const Hero = () => {
  return (
    <div className="h-screen mx-auto justify-center py-20">
      <section className="h-auto  px-2 bg-white md:px-0">
        {/* <AuroraBackground> */}
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full pb-6 space-y-6 font  sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                  <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
                    <span className="block xl:inline">
                      Unifying Wallets and Swaps for a Smarter Future.
                    </span>
                  </h1>
                  <p className="mx-auto text-base text-gray-500 sm:max-w-md font-light lg:text-2xl md:max-w-3xl">
                    Unlock seamless token swapping, wallet management, and
                    crypto on-ramping with {""}
                    <span className="bg-orange-600 text-white p-1">
                      1Connect
                    </span>
                  </p>

                  <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                    <Link
                      href="/user/dashboard"
                      className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-black sm:mb-0 hover:bg-orange-600 sm:w-auto"
                    >
                      Get Started
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full">
                  <Image
                    src="/crypto.svg"
                    alt="nothing"
                    width={1000}
                    height={1000}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* </AuroraBackground> */}
      </section>
    </div>
  );
};

export default Hero;
