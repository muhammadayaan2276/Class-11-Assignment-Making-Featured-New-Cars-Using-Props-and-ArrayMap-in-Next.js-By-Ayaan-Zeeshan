//Props
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    let carName1 = "Honda Civic";
    let carPrice1 = "PKR 86.6 - 99.0 lacs";
    let carReview1 = "350+ Reviews";
    let carImage1 ="https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254";

    let carName2 = "Suzuki Swift";
    let carPrice2 = "PKR 43.4 - 47.2 lacs";
    let carReview2 = "190+ Reviews";
    let carImage2 ="https://cache1.pakwheels.com/system/car_generation_pictures/7441/original/SWIFT.jpg?1677750438";

    let carName3 = "Suzuki Wagon R";
    let carPrice3 = "PKR 32.1 - 37.4 lacs";
    let carReview3 = "150+ Reviews";
    let carImage3 ="https://cache3.pakwheels.com/system/car_generation_pictures/7314/original/Wagon-R.jpg?1677147187";

    let carName4 = "Hyundai Elantra";
    let carPrice4 = "PKR 97.0 lacs";
    let carReview4 = "100+ Reviews";
    let carImage4 ="https://cache2.pakwheels.com/system/car_generation_pictures/7778/original/Front_Left_View.jpg?1729860896";

    return (
        <div className=" bg-pink-200 py-8">
            <h1 className="text-center text-5xl text-purple-500 hover:text-purple-700 font-bold font-serif mb-10">
                Featured New Cars Using Props
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-8">
                <ChildComponent
                    name={carName1}
                    price={carPrice1}
                    review={carReview1}
                    image={carImage1}
                />
                <ChildComponent
                    name={carName2}
                    price={carPrice2}
                    review={carReview2}
                    image={carImage2}
                />
                <ChildComponent
                    name={carName3}
                    price={carPrice3}
                    review={carReview3}
                    image={carImage3}
                />
                <ChildComponent
                    name={carName4}
                    price={carPrice4}
                    review={carReview4}
                    image={carImage4}
                />
            </div>
        </div>
    );
};

export default ParentComponent;
