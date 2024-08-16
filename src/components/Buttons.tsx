"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const AnimatedButton = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: any;
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
        className
      )}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export const CustomButton = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: any;
}) => {
  const baseStyle =
    "px-4 py-2 font-bold text-white rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0 focus:outline-none";

  return (
    <button
      className={cn(
        baseStyle,
        "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
        className
      )}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export const SolidButton = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: any;
}) => {
  return (
    <button
      className={cn(
        "w-40 h-10 rounded-xl bg-black border  border-transparent text-white text-sm",
        className
      )}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export const OutlineButton = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: any;
}) => {
  return (
    <button
      className={cn(
        "w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm",
        className
      )}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
