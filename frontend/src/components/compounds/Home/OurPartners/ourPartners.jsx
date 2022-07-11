import {Swiper, SwiperSlide} from 'swiper/react';
import {Section, SectionHeader} from '../../../elements/Sections'

export const Slider = ()=>{
    return (
        <Section>
            <SectionHeader title = "Our Partners" subtitle = "Powering the green revolution"/>
            <Swiper>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
            </Swiper>
        </Section>
        
        
    )
}