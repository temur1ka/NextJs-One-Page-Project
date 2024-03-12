import Image from "next/image";
export default function CardSection() {
  return (
    <section className="mt-20">
      <div className="relative w-full sm:w-fit">
        <Image src="group.svg" alt="" width={1500} height={500} />
      </div>
    </section>
  );
}
