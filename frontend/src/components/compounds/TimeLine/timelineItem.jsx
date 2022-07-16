export const TimelineItem=({data})=>{
    return (
        <div className="timelineItem__container">
            <div className="timelineItem__wrapper">
                < div className="timelineItem__title">{data.title}</>
                <div className="timelineItem__title">{data.description}</div>
                <div>
                    <a href={data.url}>Learn More</a>
                </div>
                <span className="timelineItem__circle">{data.id}</span>
            </div>
        </div>
    )
}