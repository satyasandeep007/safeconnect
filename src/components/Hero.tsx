"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = ({ isConnected }: any) => {
  return (
    <div className="max-w-7xl mx-auto w-full h-[80vh]">
      <section className="h-full">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 h-full"
        >
          <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5 flex h-full flex-col justify-center">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full min-w-[600px] pb-6 space-y-6 font sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                  <p className="text-6xl font-semibold text-left text-gray-900 dark:text-white leading-snug">
                    Bridging Realities through Cryptocurrency
                  </p>
                  <p className="mx-auto text-base text-gray-500 dark:text-gray-300 sm:max-w-md font-light lg:text-xl md:max-w-3xl">
                    Unlock seamless token swapping, wallet management, and
                    crypto on-ramping with {""}
                  </p>

                  <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                    {!isConnected ? (
                      <w3m-connect-button />
                    ) : (
                      <Link
                        href="/user/dashboard"
                        className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-black rounded-lg hover:bg-orange-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 sm:mb-0 sm:w-auto transition duration-300"
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
                    )}
                    <div className="flex gap-2 items-center">
                      <svg
                        width={64}
                        height={64}
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        preserveAspectRatio="none"
                      >
                        <rect width={64} height={64} fill="#4EB680" />
                        <path
                          d="M45 32L25.5 43.2583V20.7417L45 32Z"
                          fill="#222222"
                        />
                      </svg>
                      <p className="opacity-60 text-normal font-light text-gray-900 dark:text-gray-300">
                        Watch Video
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex gap-10 pt-10 flex-wrap md:justify-start">
                    <div className="w-1/3 md:w-auto h-[69px] flex flex-col-reverse">
                      <p className="opacity-70 text-lg text-gray-900 dark:text-gray-300">
                        Cryptocurrencies
                      </p>
                      <p className="text-[40px] font-bold text-gray-900 dark:text-gray-200">
                        <span className="text-[#222] dark:text-gray-300">
                          650
                        </span>
                        <span className="text-[#4eb680] dark:text-green-400">
                          +
                        </span>
                      </p>
                    </div>
                    <div className="w-1/3 md:w-auto h-[69px] flex flex-col-reverse">
                      <p className="opacity-70 text-lg text-gray-900 dark:text-gray-300">
                        Global Users
                      </p>
                      <p className="text-[40px] font-bold text-gray-900 dark:text-gray-200">
                        <span className="text-[#222] dark:text-gray-300">
                          500K
                        </span>
                        <span className="text-[#4eb680] dark:text-green-400">
                          +
                        </span>
                      </p>
                    </div>
                    <div className="w-1/3 md:w-auto h-[69px] flex flex-col-reverse">
                      <p className="opacity-70 text-lg text-gray-900 dark:text-gray-300">
                        Crypto Workshops
                      </p>
                      <p className="text-[40px] font-bold text-gray-900 dark:text-gray-200">
                        <span className="text-[#222] dark:text-gray-300">
                          1000
                        </span>
                        <span className="text-[#4eb680] dark:text-green-400">
                          +
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full px-10">
                  <Image src="/kk.png" alt="nothing" width={500} height={500} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
