import Image from "next/image";
import Right from "@/components/icons/Right";
export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything is better with a pizza
        </h1>
        <p className="mt-4 text-gray-500">
          Pizza is the missing piece that makes every day complete, asimple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase flex items-center gap-2 px-4 py-2 rounded-full ">
            Order now
            <Right />
          </button>

          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
