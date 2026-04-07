import React from "react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import Button from "../components/button";
import { FlipText } from "./magicui/flip-text";

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
        {/* <img className="h-[50px] w-[50px]" src="https://cdn.simpleicons.org/git/git" alt="" />
        <img className="h-[50px] w-[50px]" src="https://cdn.simpleicons.org/typescript/typescript" alt="" />
        <img className="h-[50px] w-[50px]" src="https://cdn.simpleicons.org/html5/html5" alt="" />
        <img className="h-[50px] w-[50px]" src="https://cdn.simpleicons.org/react/react" alt="" />
        <img className="h-[50px] w-[50px]" src="https://cdn.simpleicons.org/css3/css3" alt="" />
        <img className="h-[50px] w-[50px]" src="https://cdn.simpleicons.org/nodedotjs/nodedotjs" alt="" />
        <img className="h-[50px] w-[50px]" src="https://cdn.simpleicons.org/firebase/firebase" alt="" />
        <img className="h-[50px] w-[50px]" src="https://cdn.simpleicons.org/docker/docker" alt="" />
        <img className="h-[50px] w-[50px]" src="https://cdn.simpleicons.org/mongodb/mongodb" alt="" />
        <img className="h-[50px] w-[50px]" src="https://cdn.simpleicons.org/tailwindcss/tailwindcss" alt="" /> */}
      </div>

    </div>
  );
}
