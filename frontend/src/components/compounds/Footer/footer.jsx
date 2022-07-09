import { Section, SectionWrapper } from "../../elements/Sections"
import CopyRight from './FooterComponents/copyRight'
import SocialMedia from './FooterComponents/socialMedia'
import AddressCard from './FooterComponents/addressCard'
import MenuCard from './FooterComponents/menuCard'
import NavCard from './FooterComponents/navCard'

import classes from './footer.module.css'
import './footer.css'


export const Footer =()=>{
    return (
        <Section style ={classes.footer}>
            <div className = {classes.box}>
                <SectionWrapper style ={classes.wrapper}>
                    <AddressCard/>
                    <div className = {classes.footerLinks}>
                        <NavCard/>
                        <MenuCard/>
                    </div>
                </SectionWrapper>
            </div>
            <SocialMedia/>
            <CopyRight/>
        </Section>
    )
}

