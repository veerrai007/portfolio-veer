import React from "react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import Link from "next/link";
import Button from "../components/button";
import { FlipText } from "./magicui/flip-text";
import { IconCloudDemo } from "./iconCloud";

export default function Hero() {
  return (
    <div className="min-h-svh min-w-full flex flex-col md:flex-row md:items-center items-center md:justify-between justify-around">

      <div className=" md:relative static flex rounded-3xl md:mt-auto md:mb-auto mt-[120px] mb-[1px] md:h-[600px] md:w-[900px] items-center justify-center">
        <div className=" max-w-lg items-center justify-center overflow-hidden p-4">
          <FlipText className="text-4xl font-bold mb-3 md:mb-6 -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]">
            Hi, Im Veer
          </FlipText>
          <BoxReveal boxColor={"#A1E3F9"} duration={0.5}>
            <h2 className="mt-[.5rem] md:text-[1.3rem] text-[1rem]">
              Full Stack{" "}
              <span className="font-semibold text-[#A1E3F9]">
                Web Developer
              </span>
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
            <a data-scroll href="#projects">
              <Button />
            </a>
          </BoxReveal>
        </div>
      </div>

      <div className="flex flex-row max-w-full md:h-[600px] md:w-[900px] item-start md:items-center md:justify-center">
        <IconCloudDemo />
      </div>

    </div>
  );
}
