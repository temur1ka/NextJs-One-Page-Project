import { RocketIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import StatMotion from "../addons/statMotion";
import { motion } from "framer-motion";

export default function CompanySection() {
  return (
    <StatMotion>
      <section className="my-28 font-semibold ">
        <div className="flex justify-between md:flex-col-3 flex-wrap ">
          <div className="flex place-items-center">
            <Image src="/airbnd.png" alt="" width={192} height={60} />
          </div>
          <div className="flex place-items-center">
            <div className="flex place-items-center">
              <Image src="/dropbox.png" alt="" width={192} height={60} />
            </div>
          </div>
          <div className="flex place-items-center">
            <div className="flex place-items-center">
              <Image src="/coinbase.png" alt="" width={192} height={60} />
            </div>
          </div>
          <div className="flex place-items-center sm:my-1">
            <div className="flex place-items-center">
              <Image src="/binance.png" alt="" width={192} height={60} />
            </div>
          </div>
        </div>
      </section>
    </StatMotion>
  );
}
