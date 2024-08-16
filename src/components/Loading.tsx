"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
// import * as React from "react";

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
    <div className="bg-gradient-to-r  from-[#4EB680] via-[#4EB680] to-green-500    w-full min-h-[100vh] flex justify-center items-center">
      <div className="flex overflow-hidden rounded-2xl ">
        <AnimatePresence>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100 "
            className="h-96 w-96"
          >
            <motion.path
              transform="translate(30.674, 30.674)"
              d="M15.927 23.959l-9.823-5.797 9.817 13.839 9.828-13.839-9.828 5.797zM16.073 0l-9.819 16.297 9.819 5.807 9.823-5.801z"
              variants={icon}
              strokeWidth="0.7"
              stroke="rgba(255, 255, 255, 1)"
              strokeLinecap="round"
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
            />
          </svg>
        </AnimatePresence>
      </div>
    </div>
  );
};
