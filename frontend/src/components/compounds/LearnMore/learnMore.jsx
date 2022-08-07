import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { HowItWorks, WhyAnalytics } from '../../compounds'
import {Section, SectionImage, SectionWrapper, SectionText, SectionTitle, SectionContainer} from '../../elements';
import page_image from '../../../assets/images/learnmore_analytics2.jpg'
import classes from './learnMore.module.css'

export const learnMoreData ={
    image:"",
    title: "",
    description: "",
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
            },
            3:{
                heading:"",
                image:"",
                content:""
            }
        }
    }

const SECTION_CONTAINER_STYLE ={
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
                            }

const SECTION_WRAPPER_STYLE ={
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '600px',
                            width: '100%', 
                            backgroundImage: `url(${page_image})`,
                            backgroundSize: 'cover',
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
            <SectionTitle image={pageDetails.image} title={pageDetails.title}/>
            <SectionContainer bg={classes.sectionContainer}>
                <SectionWrapper>
                    <DetailDescription  description={pageDetails.description}/>
                </SectionWrapper>
                <SectionWrapper>
                    <div style={SECTION_CONTAINER_STYLE}>
                        <div style ={SECTION_WRAPPER_STYLE}>
                            <p>{pageDetails.sections[1].content}</p>
                        </div>
                    </div>
                </SectionWrapper>
                <SectionWrapper bg={{marginTop:'50px'}}>
                    <SectionImage image={page_image}/>
                    <SectionText 
                        bg ={{marginTop:'50px', marginLeft:'50px'}}
                        title ={}
                        description={}
                        btn={true}
                        btnText="Request Demo"
                    />
                </SectionWrapper>
                <SectionWrapper bg={{marginTop:'20px'}}>
                    <SectionText 
                        title ={}
                        description={}
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