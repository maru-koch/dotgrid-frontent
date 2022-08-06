import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { HowItWorks } from '../../compounds'
import {Section, SectionImage, SectionWrapper, SectionText, SectionTitle} from '../../elements'

export const learnMoreData ={
        image:"",
        description:{
            title: "",
            content: ""
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

export const LearnMore =({details})=>{

    // fetches the learn more details and populates the page

    const page = useSelector(state=>state.page)

    const [pageDetails, setPageDetails] = useState(learnMoreData)

    useEffect(()=>{
        setPageDetails(page)
    },[])

    return (
        <Section>
            <SectionTitle/>
            <SectionText/>
            <SectionWrapper>
                <SectionText/>
                <SectionImage/>
            </SectionWrapper>
                <SectionImage/>
                <SectionText/>
            <SectionWrapper/>
            <HowItWorks/>
        </Section>
    )
}