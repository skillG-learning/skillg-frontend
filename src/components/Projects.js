import Card2 from "./Card2";


function Projects() {

    const data = [
        {
            title: "Project Name",
            summary: "This would be the random summary for it and we don not and pople not caring abut things right now but so going good himeself.",
            name: "vishvamitra Kumar Singh",
            grade: 10,
            img: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=600",
            avatar : "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            title: "Project Name",
            summary: "This would be the random summary for it and we don not and pople not caring abut things right now but so going good himeself.",
            name: "vishvamitra Kumar Singh",
            grade: 10,
            img: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=600",
            avatar : "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            title: "Project Name",
            summary: "This would be the random summary for it and we don not and pople not caring abut things right now but so going good himeself.",
            name: "vishvamitra Kumar Singh",
            grade: 10,
            img: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=600",
            avatar : "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            title: "Project Name",
            summary: "This would be the random summary for it and we don not and pople not caring abut things right now but so going good himeself.",
            name: "vishvamitra Kumar Singh",
            grade: 10,
            img: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=600",
            avatar : "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            title: "Project Name",
            summary: "This would be the random summary for it and we don not and pople not caring abut things right now but so going good himeself.",
            name: "vishvamitra Kumar Singh",
            grade: 10,
            img: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=600",
            avatar : "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600",
        }
    ];

    const Projects = data.map((item, index) => {
        return (
            <Card2
                key={index}
                title={item.title}
                summary={item.summary}
                name={item.name}
                grade={item.grade}
                img={item.img}
                avatar={item.avatar}
            />
        )
    })

    return (
        <div className=" flex flex-col w-100 justify-center items-center " >
            <h1 className=" text-2xl sm:text-5xl font-bold m-10 ">Student's Projects</h1>
            <div className=" flex flex-wrap justify-center items-center "  style={{backgroundColor : "#3f72af" , padding : "50px 0 50px 0"}}>
                {Projects}
            </div>
        </div>
    )
};

export default Projects;