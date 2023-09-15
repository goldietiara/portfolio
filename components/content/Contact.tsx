"use client";

import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandGithubFilled } from "react-icons/tb";

type Props = {};

export default function Contact({}: Props) {
  return (
    <section>
      <h1 className="text-7xl underline underline-offset-8">
        Contact & Social
      </h1>

      <div
        className="mt-14 mb-36 w-full flex gap-5
      flex-col
      md:flex-row
      "
      >
        <motion.a
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.5,
            // ease: [0.43, 0.13, 0.23, 0.96],
            // delay: 0.5,j
          }}
          href={`mailto:goldietiara.acc@gmail.com`}
          // target="_blank"
          className="flex shrink-0 bg-black text-white rounded-sm transition-all duration-200 ease-in-out
          p-2
          hover:bg-black/70"
        >
          <SiGmail
            className="shrink-0
          text-xs
          md:text-xl"
          />
        </motion.a>

        <motion.a
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.5,
            // ease: [0.43, 0.13, 0.23, 0.96],
            // delay: 0.5,
          }}
          href={`https://www.linkedin.com/in/goldie-tiara-putri-900733196`}
          target="_blank"
          className="flex shrink-0 bg-black text-white rounded-sm transition-all duration-200 ease-in-out
          p-2
          hover:bg-black/70"
        >
          <TfiLinkedin
            className="shrink-0
          text-xs
          md:text-xl"
          />
        </motion.a>

        <motion.a
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.5,
            // ease: [0.43, 0.13, 0.23, 0.96],
            // delay: 0.5,
          }}
          href={`https://github.com/goldietiara`}
          target="_blank"
          className="flex shrink-0 bg-black text-white rounded-sm transition-all duration-200 ease-in-out
            p-2
            hover:bg-black/70"
        >
          <TbBrandGithubFilled
            className="shrink-0
          text-xs
          md:text-xl"
          />
        </motion.a>
      </div>
    </section>
  );
}
