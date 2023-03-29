import { Section, SectionWrapper } from "../../elements/Sections"
import CopyRight from './FooterComponents/copyRight'
import SocialMedia from './FooterComponents/socialMedia'
import AddressCard from './FooterComponents/addressCard'
import MenuCard from './FooterComponents/menuCard'
import NavCard from './FooterComponents/navCard'
import classes from './footer.module.css'

// styling for the footer componet


export const Footer =()=>{
    return (
        <Section>
            <SectionWrapper>
                <AddressCard/>
                <NavCard/>
                <MenuCard/>
            </SectionWrapper>
            <SocialMedia/>
            <CopyRight/>
        </Section>
    )
}

