import Image from "next/image";
function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/30 transition-all">
      <div className="text-center ">
        <Image
          src="/pizza.png"
          className="max-h-24 bloch mx-auto"
          alt="pizza"
          width={150}
          height={150}
        />
      </div>
      <h4 className="font-semibold text-xl my-3">Peperoni pizza</h4>
      <p className="text-gray-500 text-sm">
        lorem ipsum jkdjkdjksjksd ksdklsdklsd lsddsksdk ksdk dkeoo kskld
      </p>
      <button className="mt-4 bg-primary text-white rounded-full my-2 px-8 py-2">
        Add to cart
      </button>
    </div>
  );
}

export default MenuItem;
