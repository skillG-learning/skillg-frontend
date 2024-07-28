

function Card2({ title, img, summary, grade, name , avatar}) {

    return (
        <div className="max-w-md w-full lg:flex m-3">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${img})`}}>
            </div>
            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-black font-bold text-xl mb-2">{title}</div>
                    <p className="text-grey-darker text-base">{summary}</p>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src={avatar} alt= {`Avatar of ${avatar}`} />
                    <div className="text-sm">
                        <p className="text-black leading-none">{name}</p>
                        <p className="text-grey-dark">grade: {grade}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card2;

