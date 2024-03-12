import { RocketIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import StatMotion from "../addons/statMotion";
import { motion } from "framer-motion";

export default function StatSection() {
  return (
    <StatMotion>
      <section className="my-20 font-semibold ">
        <div className="flex justify-between md:flex-col-3 flex-wrap ">
          <div className="flex place-items-center">
            <h1 className=" font-bold text-3xl text-white">26M+</h1>
            <span className="ml-2 text-xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Programmers
            </span>
          </div>
          <div className="flex place-items-center">
            <h1 className=" font-bold text-3xl text-white">2,500+</h1>
            <span className="ml-2 text-xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Languages
            </span>
          </div>
          <div className="flex place-items-center">
            <h1 className=" font-bold text-3xl text-white">75K+</h1>
            <span className="ml-2 text-xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Average Salary
            </span>
          </div>
          <div className="flex place-items-center sm:my-1">
            <h1 className=" font-bold text-3xl text-white">28M+</h1>
            <span className="ml-2 text-xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Jobs
            </span>
          </div>
        </div>
      </section>
    </StatMotion>
  );
}
