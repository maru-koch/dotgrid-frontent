import { Section, SectionWrapper, Text, Button } from '../../../elements'
import classes from './priceModel.module.css'
const PriceModel =({setPriceModel})=>{

    // Selects price Model

    return (
        <Section>
            <SectionWrapper>
                <Button btnType ="secondary active" onClick ={()=>setPriceModel("individual")} text="Individual"/>
                <Button btnType ="secondary" onClick ={()=>setPriceModel("enterprise")} text="Enterprise"/>
            </SectionWrapper>
        </Section>
    )
}
export const SelectPriceModel=({description, setPriceModel})=>{

    // Displays description based on the selected price model

    return (
        <Section>
            <PriceModel setPriceModel = {setPriceModel}/>
            <div className={classes.priceModel__textWrapper}>
                <Text text={description} size={18}/>
            </div>
        </Section>
    )
}

