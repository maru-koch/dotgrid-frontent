import {useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { HowItWorks, ModalRequestDemo } from '../../compounds'
import { Section, SectionImage, SectionWrapper, SectionText, SectionTitle, SectionContainer} from '../../elements';
import classes from './learnMore.module.css'

export const initialValues ={
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
        width: '100%', 
        height: '400px',
        zIndex:1000,
        fontSize: '1.6rem',
        padding: '50px',
        display: 'flex',
        textAlign: 'center',
        color:'#fff',
        textShadow:'1px 1px 5px rgba(0,0,0,0.2)',
        borderRadius:'20px',
        boxShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily:'Poppins',
        backgroundColor: 'var(--accent-color)',
                            }
const SECTION_STYLE = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '600px',
            width: '100%', 
            backgroundSize: 'cover'
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

    const learnmore  = useSelector(state=>state.learnMore)
    const [pageDetails, setPageDetails] = useState(initialValues)

    const [open, setOpen] = useState(false)
 
    const openModal=()=>{
        setOpen(true)
    }

    useMemo(()=>{
        setPageDetails(learnmore)
        console.log(learnmore)
    },[learnmore])

    return (
        <Section>
            <SectionTitle image={pageDetails.sections[1].image} title={pageDetails.title}/>
            <SectionContainer bg={classes.sectionContainer}>
                <SectionWrapper>
                    <DetailDescription  description={`${pageDetails.description}`}/>
                </SectionWrapper>

                {/* SECTION 1 */}
                <SectionWrapper>
                    <div style={{...SECTION_CONTAINER_STYLE}}>
                        <div 
                            style ={{ ...SECTION_STYLE, 
                            }}
                            >
                            <p>{pageDetails.sections[2].content}</p>
                        </div>
                    </div>
                </SectionWrapper>

                 {/* SECTION 2 */}
                <SectionWrapper bg={{marginTop:'50px'}}>
                    <SectionImage image={`${pageDetails.sections[2].image}`}/>
                    <SectionText 
                        bg ={{marginTop:'50px', marginLeft:'50px'}}
                        title ={`${pageDetails.sections[2].heading}`}
                        description={`${pageDetails.sections[2].content}`}
                        btn={true}
                        btnText="Request Demo"
                        openModal={openModal}
                    />
                </SectionWrapper>

                 {/* SECTION 3 */}
                <SectionWrapper bg={{marginTop:'20px'}}>
                    <SectionText 
                        title ={`${pageDetails.sections[3].heading}`}
                        description={`${pageDetails.sections[3].content}`}
                        btn={true}
                        btnText="Request Demo"
                        openModal={openModal}
                    />
                    <SectionImage image={pageDetails.sections[3].image}/>
                </SectionWrapper>
            </SectionContainer>
            <HowItWorks/>
            <ModalRequestDemo open={open}/>
        </Section>
    )
}