import Image from "next/image";
import MiddleMotion from "../addons/middleMotion";
import { motion } from "framer-motion";

export default function MiddleThSection() {
  return (
    <MiddleMotion>
      <section className="flex my-36 w-full flex-col-reverse lg:flex-row  items-center ">
        <div className="flex flex-1  ">
          <Image
            alt=""
            src="money.svg"
            width={450}
            height={450}
            className="relative"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-grow space-y-6">
            <h1 className="font-serif font-semibold  text-5xl text-white">
              The{" "}
              <span className="font-serif font-semibold text-transparent bg-clip-text text-5xl bg-gradient-to-r from-blue-400 to-purple-400">
                {" "}
                Most Wanted
              </span>{" "}
              Profession,
              <br />
            </h1>
            <h1 className="font-serif font-semibold text-5xl text-white">
              {" "}
              Highest{" "}
              <span className="font-serif font-semibold text-transparent bg-clip-text text-5xl bg-gradient-to-r from-blue-400 to-purple-400">
                Salary
              </span>{" "}
              In The World
            </h1>

            <p className="text-zinc-300 font-serif">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda commodi error suscipit quod provident, consequatur
              voluptates nulla fuga maiores, dolorum nobis porro natus? Error,
              exercitationem.
            </p>
          </div>
        </div>
      </section>
    </MiddleMotion>
  );
}
