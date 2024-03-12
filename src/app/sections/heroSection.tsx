import Image from "next/image";
import style from "./header.module.css";
import ReactTypeAnimation from "../addons/reactType";
import { Button } from "@/components/ui/button";
import HeroMotion from "../addons/heroMotion";

import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

export default function HeroSection() {
  return (
    <HeroMotion>
      <section className="font-serif  flex w-full md:flex-row flex-col">
        <div className="flex flex-col flex-1">
          <h1 className=" lg:text-6xl text-4xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-400 to-purple-400">
            Become a Programmer
          </h1>
          <span className="lg:text-6xl text-4xl  text-white my-4">
            <ReactTypeAnimation />
          </span>
          <p className="my-5">
            <span className="text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              cupiditate, consectetur magnam delectus laboriosam saepe libero
              veritatis repudiandae labore iure doloribus sunt. Laudantium,
              itaque consequuntur.
            </span>
          </p>
          <div className="buttons ">
            <Button
              variant={"outline"}
              className="mr-3 w-full sm:w-fit lg:mb-0 mb-2"
            >
              Hire me
              <ChevronRightIcon />
            </Button>
            <Button className="w-full sm:w-fit">
              Contact me{" "}
              <span className="ml-1">
                <EnvelopeOpenIcon />
              </span>
            </Button>
          </div>
        </div>

        <div className="flex flex-1  md:place-content-center">
          <div className="relative">
            <Image
              alt=""
              id="img"
              width={530}
              height={350}
              className="md:mt-0 mt-10"
              src="desktop.svg"
            />
          </div>
        </div>
      </section>
    </HeroMotion>
  );
}
