import Image from "next/image";
export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold">
          Everything is better with a pizza
        </h1>
        <p className="mt-4 text-gray-500">
          Pizza is the missing piece that makes every day complete, asimple yet
          delicious joy in life
        </p>
        <div>
          <button className="bg-primary px-8 py-2 rounded-full">
            Order now
          </button>
          <button>Learn more</button>
        </div>
      </div>
      <div className="relative">
        <Image src={"/pizza.png"} layout={"fill"} alt={"pizza"} />
      </div>
    </section>
  );
}
