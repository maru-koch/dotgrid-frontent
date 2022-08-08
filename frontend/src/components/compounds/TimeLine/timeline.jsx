import {TimeLineItem} from './timelineItem';
import classes from './timeline.module.css'
export const TimeLine =({timeLineData})=>{
    return(
        <div className={classes.timeline__container}>
            <div className={classes.timeline__wrapper}>
                {timeLineData.map((data, idx)=> (<TimeLineItem data ={data} key={idx} id={idx+1}/>))}
            </div>
        </div>
    )
}