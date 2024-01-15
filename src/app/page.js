import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p className="">
            Cillum reprehenderit labore esse duis adipisicing laborum minim quis
            eiusmod. Est dolore sint amet Lorem ut dolore. Non non dolor anim
            reprehenderit mollit do velit officia deserunt tempor minim id
            officia elit. Proident amet ex sint culpa magna. Commodo incididunt
            culpa eiusmod do elit labore. Eu magna ipsum occaecat do eiusmod
            laboris mollit est aute nisi deserunt veniam aute nulla.
          </p>
          <p className="">
            Cillum reprehenderit labore esse duis adipisicing laborum minim quis
            eiusmod. Est dolore sint amet Lorem ut dolore. Non non dolor anim
            reprehenderit mollit do velit officia deserunt tempor minim id
            officia elit. Proident amet ex sint culpa magna. Commodo incididunt
            culpa eiusmod do elit labore. Eu magna ipsum occaecat do eiusmod
            laboris mollit est aute nisi deserunt veniam aute nulla.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+46738123123"
          >
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  );
}
