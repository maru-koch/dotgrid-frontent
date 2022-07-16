export const TimeLineItem=({data, id})=>{
    return (
        <div className="timelineItem__container">
            <div className="timelineItem__wrapper">
                <div className="timelineItem__title">{data.title}</div>
                <div className="timelineItem__title">{data.description}</div>
                <div>
                    <a href={data.url}>Learn More</a>
                </div>
                <span className="timelineItem__circle">{id}</span>
            </div>
        </div>
    )
}