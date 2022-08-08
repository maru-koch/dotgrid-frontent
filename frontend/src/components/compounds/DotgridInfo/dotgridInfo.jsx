import { SectionWrapper, Section, SectionImage } from "../../elements"
import { TimeLine } from "../TimeLine"
import {timeLineData} from '../../../constants/timelineData'
import image from '../../../assets/images/analytics_phone.png'

export const DotgridInfo =()=>{
    return (
        <Section bg={{backgroundColor:"var(--primary-color)"}}>
            <SectionWrapper>
                <SectionImage image ={image}/>
                <TimeLine timeLineData ={timeLineData}/>
            </SectionWrapper>
        </Section>
    )
}