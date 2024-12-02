//Props
import React from "react";
import Image from "next/image";

const ChildComponent = (props: any) => {
    return (
        <div className="bg-orange-200 border-2 border-gray-600 rounded-lg p-4 transform hover:scale-105
         transition-transform duration-300 ease-in-out shadow-custom">

            {/* Car Image */}
            <div className="overflow-hidden rounded-t-lg">
                <Image
                    src={props.image}
                    alt={props.name}
                    width={250}
                    height={120}
                    className="rounded-md object-cover w-full h-40"
                />
            </div>

            {/* Car Details */}
            <div className="text-center mt-6">
                <h2 className="text-2xl text-red-700 font-semibold hover:text-red-500">{props.name}</h2> 
                <p className="text-green-600 text-md mt-3 font-semibold">{props.price}</p> 
                <p className="text-gray-600 text-sm mt-2 font-medium">{props.review}</p>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-6">
                <button className="bg-blue-600 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-800">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ChildComponent;
