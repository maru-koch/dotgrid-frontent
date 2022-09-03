
import {Section,Button, SectionWrapper} from '../../../../elements'
export const EnergyConsumedHeader=(showApplianceInput)=>{
    // Holds the add appliance button
    // when click makes setShowAppliances equals true
    return (
        <Section bg={{width:'100%', display:'flex',justifyContent:'flex-end',}}>
            <SectionWrapper bg={{width:'100%', display:'flex',justifyContent:'flex-end', padding:'20px'}}>
                <Button onClick={()=>showApplianceInput(true)} color="var(--accent-color)" text="Add Appliance" />
            </SectionWrapper>
        </Section>
    )
}

