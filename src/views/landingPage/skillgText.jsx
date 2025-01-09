import React from 'react';
import Lottie from 'react-lottie';
import LandingLottie from '../../assets/C.json';

function SkillGText() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LandingLottie, // The imported JSON file
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="flex flex-col sm:flex-row justify-center w-full mb-20 relative">
            {/* Text Section */}
            <div className="flex flex-col justify-start w-full sm:w-[50%] pt-10 sm:pt-20 px-5 sm:px-0 relative z-10">
                <div className="font-bold">
                    <h1 className="text-4xl sm:text-[7rem] text-black mb-[10px]">
                        Skill <span className="text-red-500">G</span>
                    </h1>
                </div>
                <div className="mt-3 sm:mt-5">
                    <p className="text-base sm:text-lg mt-[20px] text-gray-800">
                       An unique collaboration of IIT, IISC and NIT Alumni to empower young minds with next generation skills
                    </p>
                </div>
                <div className="mt-3 sm:mt-5">
                    <button className="bg-[#001650] text-white px-4 py-2 rounded">Book A Free Trial</button>
                </div>
            </div>

            {/* Lottie Animation as Background */}
            <div className="hidden sm:block absolute sm:top-[100px] left-[40%] w-full h-full z-0">
                <Lottie options={defaultOptions} height={500} width={500} />
            </div>
        </div>
    );
}

export default SkillGText;
