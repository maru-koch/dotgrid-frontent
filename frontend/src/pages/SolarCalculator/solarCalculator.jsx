
import { SectionHeader } from '../../components/elements/Sections'
import {SolarPVCalculator} from '../../components/compounds'
import { PageLayout } from '../../layout'


export const SolarPVCalculatorPage =()=>{
    return (
    <PageLayout>
        <SectionHeader title ="Solar Calculator"/>
        <SolarPVCalculator/>
    </PageLayout>)
}
