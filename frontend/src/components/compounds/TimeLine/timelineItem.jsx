
import './timelineItem.css'

export const TimeLineItem=({data, id})=>{
    return (
        <div className="timelineItem__container">
            <div className="timelineItem__wrapper">
                <p className="timelineItem__title">{data.title}</p>
                <p className="timelineItem__desc">{data.description}</p>
                <div>
                    <a href={data.url}>Learn More</a>
                </div>
                <span className="timelineItem__circle">{id}</span>
            </div>
        </div>
    )
}