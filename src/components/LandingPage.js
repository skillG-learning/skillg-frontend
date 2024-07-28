import LandingPhoto from "./assets/photo1.gif";
import Form from "./Form";

function LandingPage() {
    return (
        <div className="flex flex-row  justify-center w-full mb-20">
            <div className="flex flex-col justify-start w-2/5 pt-10 sm:pt-20 px-5 sm:px-0">
                <div className="font-bold">
                    <h1 className="text-4xl sm:text-6xl m-0">Skill <span className="text-red-500">G</span></h1>
                </div>
                <div className="mt-3 sm:mt-5">
                    <p className="text-base sm:text-lg text-gray-800">To Empower Individuals To Explore The Limitless Possibilities Of Robotics And Technology.</p>
                </div>
                <div className="mt-3 sm:mt-5">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Book A Free Trial</button>
                </div>
            </div>
            <div className="flex justify-center  w-2/5 pt-10 sm:pt-20">
                <Form />
            </div>
        </div>
    );
};

export default LandingPage;
