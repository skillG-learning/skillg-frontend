import "./cssFiles/Card1.css";

function Card1({title , img , summary}) {

    return (
        <div className="card1">
            <img src={img} />
            <div className="card1-body">
                <h2 className=" font-bold  ">{title}</h2>
                <p className="m-3">{summary}</p>
                <button>Learn More</button>
            </div>
        </div>
    )
};

export default Card1;