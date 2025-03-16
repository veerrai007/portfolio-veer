import React from "react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { BorderBeam } from "./magicui/border-beam";
import Link from "next/link";
import Button from "../components/button";
import { FlipText } from "./magicui/flip-text";

export default function Hero() {
  return (
    <div className="min-h-svh min-w-full flex items-center justify-center">
      <div className=" md:relative static flex rounded-lg  md:bg-gray-900/100 h-[600px] w-[900px] items-center justify-center">
        <BorderBeam duration={10} size={300} />
        <div className=" max-w-lg items-center justify-center overflow-hidden p-4">
          <FlipText className="text-4xl font-bold mb-3 md:mb-6 -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]">
            Hi, Im Veer
          </FlipText>
          <BoxReveal boxColor={"#A1E3F9"} duration={0.5}>
            <h2 className="mt-[.5rem] md:text-[1.3rem] text-[1rem]">
              Full Stack <span className="font-semibold text-[#A1E3F9]">Web Developer</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#A1E3F9"} duration={0.5}>
            <div className="mt-4 md:mt-6">
              <p>
                -&gt; Crafting Scalable Web Experiences with
                <span className="font-semibold text-[#A1E3F9]"> React</span>,
                <span className="font-semibold text-[#A1E3F9]">
                  {" "}
                  Typescript
                </span>
                ,
                <span className="font-semibold text-[#A1E3F9]">
                  {" "}
                  Tailwind CSS
                </span>
                , and
                <span className="font-semibold text-[#A1E3F9]"> Motion</span>
                . <br />
                -&gt; Optimized, scalable, and efficient web solutions. <br />
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#A1E3F9"} duration={0.5}>
            <Link href="/projects">
              <Button />
            </Link>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
}
