import {TimeLineItem} from './timelineItem';
import {timeLineData} from '../../../constants/timelineData'

export const TimeLine=()=>{
    return(
        <div className="timeline__container">
            <div className="timelineItem__wrapper">
                {timeLineData.map((data, idx)=>
                    (<TimeLineItem data ={data} key={idx} id={idx+1}/>)
                )}
            </div>
        </div>
    )
}