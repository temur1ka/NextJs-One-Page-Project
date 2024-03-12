"use client";
import React from "react";
import Image from "next/image";
import ReactTypeAnimation from "../addons/reactType";
import { useEffect } from "react";
import { motion } from "framer-motion";
import MyComponent from "../addons/heroMotion";
import style from "./header.module.css";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: -20,
    transition: {
      duration: 1,
    },
  },
};

export default function Header() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  return (
    <section>
      <MyComponent>
        <div className="grid grid-cols-2 lg:grid-cols-12">
          <div className="grid col-span-4">
            <h1 className="text-white lg:text-6xl text-4xl mb-4 font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-pink-600 ">
                Hello,I'm Temo
              </span>
              <br />
              <ReactTypeAnimation />
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl break-words transform lg:flex-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <br /> Saepe, cupiditate? Lorem, ipsum dolor.
            </p>
            <div>
              <button className="rounded-full p-3 w-full sm:w-fit mr-5 border-2 text-white">
                Hire me
              </button>
              <button className="rounded-full p-3 w-full sm:w-fit my-2 lg:my-2 bg-gradient-to-r from-blue-400 via-purple-800 to-pink-600 text-white border-2">
                Hire me
              </button>
            </div>
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className="grid"
          >
            <motion.img
              className={style.scImg}
              width={500}
              height={400}
              variants={images}
              src="header.svg"
              alt=""
            />
          </motion.div>
        </div>
      </MyComponent>
    </section>
  );
}
