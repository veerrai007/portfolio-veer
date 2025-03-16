import React from "react";
import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";

export default function Hero() {
  return (
    <div className="min-h-svh min-w-full flex items-center justify-center">
      <div className="flex border-4 border-grey-500/100 h-[600px] w-[800px] items-center justify-center">
        <div className=" max-w-lg items-center justify-center overflow-hidden p-4">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold">
              Hi, Im Veer<span className="text-[#5046e6]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              Full Stack <span className="text-[#5046e6]">Web Developer</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-6">
              <p>
                -&gt; 🚀 Crafting Scalable Web Experiences with
                <span className="font-semibold text-[#5046e6]"> React</span>,
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Typescript
                </span>
                ,
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Tailwind CSS
                </span>
                , and
                <span className="font-semibold text-[#5046e6]"> Motion</span>
                . <br />
                -&gt; Optimized, scalable, and efficient web solutions. <br />
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <a href="#projects">
              <Button className="mt-[1.6rem] bg-[#5046e6]">Projects</Button>
            </a>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
}
