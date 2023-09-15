"use client";

import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};

export default function Intro({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Indonesia", "Jakarta", "Developer by choice", "Designer for fun"],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex 
      flex-col gap-10
      md:flex-row md:gap-5"
    >
      {/* Profile */}
      <div
        className="flex flex-col 
        gap-0
        mx-5 
      md:mx-0 md:gap-5 "
      >
        <motion.h1
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.6, 0.01, -0.05, 0.9],
            delay: 0.5,
          }}
          className="font-bold mt-10
        text-7xl pl-2 
        md:text-8xl md:mt-0 md:pl-0"
        >
          Software Engineer
        </motion.h1>

        <motion.p
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.6, 0.01, -0.05, 0.9],
            delay: 0.75,
          }}
          className="font-medium mt-5
          text-2xl pl-2 
          md:text-4xl md:mt-0 md:pl-0"
        >
          <span className="text-gray-500">Specialized in </span>Front-End
        </motion.p>

        <motion.p
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.6, 0.01, -0.05, 0.9],
            delay: 1,
          }}
          className=" font-medium mt-1 mb-16
          text-xl pl-2 
          md:text-2xl md:mt-0 md:mb-0 md:pl-0"
        >
          {/*  indonesia */}
          {text}
          <Cursor cursorColor="#F7AB0A" />
          <span className=" text-transparent">.</span>
        </motion.p>

        <motion.div
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.6, 0.01, -0.05, 0.9],
            delay: 1.25,
          }}
          className="flex justify-start items-center gap-5 bg-black w-fit pt-2 pr-8 overflow-clip
        sm:hidden"
        >
          <Image
            src={"/goldie.PNG"}
            alt="photo"
            width={140}
            height={140}
            className=" "
          ></Image>

          <div className=" bg-white bg-clip-text ">
            <h1
              className="font-extrabold text-transparent tracking-wider leading-[1.35em] 
        text-5xl 
        md:text-8xl "
            >
              <p>Goldie</p>
              <p>Tiara</p>
            </h1>
          </div>
        </motion.div>

        {/* <div className="pt-5">
          <Link href={"/about"} className="bg-black text-white py-4 px-7">
            About Me
          </Link>
        </div> */}
      </div>

      {/* Photo Large */}
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
        className="hidden bg-black 
        px-5 pt-10 gap-5 mt-40
      md:gap-10 md:px-10 md:py-20 md:mt-0 md:flex md:flex-col md:items-center md:justify-center"
      >
        <Image
          src={"/goldie.PNG"}
          alt="photo"
          width={400}
          height={400}
          className=" bg-white/50"
        ></Image>
        <h1 className="text-white text-xl flex w-full ">Goldie Tiara</h1>
      </motion.div>

      {/* Photo Small */}
    </motion.main>
  );
}
