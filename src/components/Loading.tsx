"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingIcon from "@/assets/eth.svg";
import Image from "next/image";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

export const Loading = ({ children }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return !loading ? (
    <div>{children}</div>
  ) : (
    <div className="bg-gradient-to-r  from-sky-500 to-indigo-500 w-full min-h-[100vh] flex justify-center items-center">
      <div className="p-8 flex place-content-center overflow-hidden rounded-2xl">
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 0,
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
            }}
            animate={{
              opacity: 1,
              pathLength: 1,
              fill: "rgba(255, 255, 255, 1)",
            }}
            transition={{
              default: { duration: 2, yoyo: Infinity, ease: "easeInOut" },
              fill: { duration: 2, ease: "easeInOut" },
            }}
          >
            <Image
              src={LoadingIcon}
              width={100}
              height={100}
              alt="LoadingIcon"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
