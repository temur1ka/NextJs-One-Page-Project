import { Button } from "@/components/ui/button";
export default function EmailSection() {
  return (
    <section>
      <h1 className="text-center text-white text-2xl font-semibold mb-20">
        Contact us on Email
      </h1>

      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your Email"
          className="p-3 rounded-xl md:w-[400px] w-[200px]"
        />
        <Button className="ml-3 p-6">Submit</Button>
      </div>
    </section>
  );
}
