import Card1 from "./Card1";

function Programs() {
    const programs = [
        {
            title: "Program Title",
            summary: "Skill-G Industrial Visits offer students a captivating journey into the heart of industries and technology dw dww wwew",
            detail: "Skill-G Industrial Visits offer students a captivating journey into the heart of industries and technology. With expert guides, students get to witness real-world operations, fostering a deeper understanding of how concepts come to life. These science tours ignite curiosity and provide a hands-on glimpse into the world of innovation and production",
            img: "https://images.pexels.com/photos/5905706/pexels-photo-5905706.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            title: "Program Title",
            summary: "Skill-G Industrial Visits offer students a captivating journey into the heart of industries and technology dw dww wwew",
            detail: "Skill-G Industrial Visits offer students a captivating journey into the heart of industries and technology. With expert guides, students get to witness real-world operations, fostering a deeper understanding of how concepts come to life. These science tours ignite curiosity and provide a hands-on glimpse into the world of innovation and production",
            img: "https://images.pexels.com/photos/5905564/pexels-photo-5905564.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    const allPrograms = programs.map((item, index) => {
        return (
            <Card1
                key={index}
                img={item.img}
                title={item.title}
                summary={item.summary}
            />
        );
    });

    return (
        <div className="program-container p-2 bg-no-repeat bg-cover flex flex-col my-30 mx-auto w-full justify-center items-center text-center">
            <div className="programs-container-1">
                <h1 className="font-bold text-3xl m-0 text-black">Programs We Offer</h1>
                <p className="m-3">Some Random text will be appear here</p>
            </div>
            <div className="flex flex-wrap justify-center programs-container-2">
                {allPrograms}
            </div>
        </div>
    );
}

export default Programs;
