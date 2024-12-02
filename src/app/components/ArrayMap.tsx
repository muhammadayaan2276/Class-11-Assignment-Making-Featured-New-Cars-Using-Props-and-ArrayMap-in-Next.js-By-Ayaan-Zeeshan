//ArrayMap
import Image from "next/image";

const ArrayMap = () => {
  const carName = [
    {
      carName: "Toyota Corolla",
      carPrice: "PKR 59.7 - 75.5 lacs",
      carReview: "600+ Reviews",
      carImage:
        "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674",
    },
    {
      carName: "ORA 07 EV",
      carPrice: "PKR 1.75 crore",
      carReview: "50+ Reviews",
      carImage:
        "https://cache4.pakwheels.com/system/car_generation_pictures/7750/original/Ora_07.png?1723722637",
    },
    {
      carName: "KIA Stonic",
      carPrice: "PKR 55.0 lacs",
      carReview: "50+ Reviews",
      carImage:
        "https://cache3.pakwheels.com/system/car_generation_pictures/5510/original/kia-stonic-blue-front.jpg?1624447924",
    },
    {
      carName: "Prince Pearl",
      carPrice: "PKR 18.5 lacs",
      carReview: "50+ Reviews",
      carImage:
        "https://cache2.pakwheels.com/system/car_generation_pictures/5253/original/prince.jpg?1595597356",
    },
  ];

  return (
    <div className="bg-red-100 py-8">
      <h1 className="text-center text-5xl text-green-500 hover:text-green-700 font-bold font-serif mb-10">
        Featured New Cars Using ArrayMap
      </h1>

      {/* Container for the cars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-8">
        {carName.map((cars, index) => (
          <div
            key={index}
            className="bg-sky-300 border-2 border-gray-600 rounded-lg p-4 transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg"
          >
            {/* Image Component */}
            <div className="text-center image-wrapper">
              <Image
                src={cars.carImage}
                alt={cars.carName}
                width={250}
                height={120}
                className="rounded-md object-cover w-full h-40"
              />
            </div>

            {/* Car Details */}
            <div className="text-center mt-6">
              <h2 className="text-2xl text-rose-500 font-semibold hover:text-red-700">
                {cars.carName}
              </h2>
              <p className="text-green-600 text-md mt-3 font-semibold">
                {cars.carPrice}
              </p>
              <p className="text-black text-sm mt-2 font-medium">
                {cars.carReview}
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-red-500 text-white font-bold px-4 py-2 rounded-md hover:bg-red-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrayMap;
