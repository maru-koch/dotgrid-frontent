import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { HowItWorks, WhyAnalytics } from '../../compounds'
import {Section, SectionImage, SectionWrapper, SectionText, SectionTitle, SectionContainer} from '../../elements';
import page_image from '../../../assets/images/learnmore_analytics2.jpg'
import classes from './learnMore.module.css'

export const learnMoreData ={
        image:"",
        description:{
            title: "",
            content: `
                        As the world moves from fossil energy towards the cleaner solar options, data 
                        holds the potential to unlock the value inherent in powering how the energy generated
                        is being consumed and the pattern in the consumption.
                        This insight will help the stake holders and energy managers to best optimize the system 
                        and understand their customers.
                        It provides access, for the enterprise user to the energy consumption patterns to the clients
                        connect to the grid.
                        is availableDotgrid analytics provides you with the best analytical solution 
                        to derive insight from your energy data. energy insight and optimization
                        for the.
                        <br>
                        Dotgrid provides the tools and services to harness your energy data`
        },
        sections:{
            1:{
                heading:"",
                image:"",
                content:""
            },
            2:{
                heading:"",
                image:"",
                content:""
            }
        }
    }
const DetailDescription=({description})=>{
    return (
        <main className={classes.detail__container}>
            <section className={classes.detail__wrapper}>
                <p>{description}</p>
            </section>
        </main>
    )
}
export const LearnMore =({details})=>{

    // fetches the learn more details and populates the page

    const page = useSelector(state=>state.page)

    const [pageDetails, setPageDetails] = useState(learnMoreData)

    const bg ={
        backgroundColor:'red',
    }
    useEffect(()=>{
        setPageDetails(page)
    },[])

    return (
        <Section>
            <SectionTitle/>
            <SectionContainer bg={classes.sectionContainer}>
                <SectionWrapper>
                    <DetailDescription  description={learnMoreData.description['content']}/>
                </SectionWrapper>
                <SectionWrapper>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '600px',
                            width: '100%', 
                            backgroundImage: `url(${page_image})`,
                            backgroundSize: 'cover',
                        }}
                        >

                        <div style ={{
                            width: '700px', 
                            height: '400px',
                            zIndex:1000,
                            fontSize: '1.6rem',
                            padding: '50px',
                            display: 'flex',
                            textAlign: 'center',
                            color:'#fff',
                            borderRadius:'20px',
                            boxShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            justifyContent: 'center', 
                            alignItems: 'center',
                            fontFamily:'Poppins',
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            
                            }}>
                        <p>
                            Enjoy 24/7 power supply without the extra cost of buying fuel, 
                            the stress of enduring long queue at the patrol station, or 
                            the noise pollution.
                        </p>
                        </div>
                    </div>
                {/* <SectionImage 
                    image={page_image} 
                    imageStyle={{width: '100%', height: 600, position:'sticky', backgroundSize: 'cover'}} 
                    containerStyle={{width:'100%', height:600}}
                    wrapperStyle={{width:'100%',  position:'relative'}}/> */}
                </SectionWrapper>
                <SectionWrapper bg={{marginTop:'50px'}}>
                    <SectionImage image={page_image}/>
                    <SectionText 
                        bg ={{marginTop:'50px', marginLeft:'50px'}}
                        title ="Why Dotgrid Analytics?"
                        description=" Enjoy 24/7 power supply without the extra cost of buying fuel, 
                                the stress of enduring long queue at the patrol station, or 
                                the noise pol  ution.
                                Enjoy 24/7 power supply without the extra cost of buying fuel, 
                                the stress of enduring long queue at the patrol station, or 
                                the noise pol  ution.
                                
                                "
                        btn={true}
                        btnText="Request Demo"
                    />
                </SectionWrapper>
                <SectionWrapper bg={{marginTop:'20px'}}>
                    <SectionText 
                      
                        title ="Why Dotgrid Analytics?"
                        description=" Enjoy 24/7 power supply without the extra cost of buying fuel, 
                                the stress of enduring long queue at the patrol station, or 
                                the noise pol  ution.
                                Enjoy 24/7 power supply without the extra cost of buying fuel, 
                                the stress of enduring long queue at the patrol station, or 
                                the noise pol  ution.
                                
                                "
                        btn={true}
                        btnText="Request Demo"
                    />
                    <SectionImage image={page_image}/>
                </SectionWrapper>
            </SectionContainer>
            <HowItWorks/>
        </Section>
    )
}