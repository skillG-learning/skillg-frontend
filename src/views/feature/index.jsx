import React from "react";
import A from "../../assets/A.json";
import B from "../../assets/B.json";
import Lottie from 'react-lottie';

const AddonFeatures = () => {
    const defaultOptionsA = {
        loop: true,
        autoplay: true,
        animationData: A, // The imported JSON file
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptionsB = {
        loop: true,
        autoplay: true,
        animationData: B, // The imported JSON file
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="p-8 bg-[#001650a8] mt-[20px]">
            <h2 className="text-center text-black text-2xl font-bold mb-8">
                Benefits We Provide
            </h2>
            <div className="flex flex-row justify-around w-[60%] mx-[auto]">
                <div className="border-2 border-black p-5 flex flex-col w-48 text-center rounded-lg">
                    <Lottie options={defaultOptionsA} height={100} width={100} />
                    <h2 className="text-black">Project Based Learning</h2>
                </div>
                <div className="border-2 border-black p-5 flex flex-col w-48 text-center rounded-lg">
                    <Lottie options={defaultOptionsB} height={100} width={100} />
                    <h2 className="text-black">Expert Led Mentorship</h2>
                </div>
                <div className="border-2 border-black p-5 flex flex-col w-48 text-center rounded-lg">
                    <Lottie options={defaultOptionsB} height={100} width={100} />
                    <h2 className="text-black">Expert Led Mentorship</h2>
                </div>
                <div className="border-2 border-black p-5 flex flex-col w-48 text-center rounded-lg">
                    <Lottie options={defaultOptionsB} height={100} width={100} />
                    <h2 className="text-black">Expert Led Mentorship</h2>
                </div>
            </div>
        </div>
    );
};

export default AddonFeatures;
