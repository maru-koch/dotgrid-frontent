import {Section, SectionWrapper} from '../../../../../elements'


const appliances =["Fan", "LED Light", "LED TV", "Sound System", "pressure"]

const ApplianceList=()=>{
    return(
        <main>
            <section>
                <button><i class="fa fa-remove"></i></button>
                <select name="appliance" id ="appliance-select">
                    {appliances.map((appliance)=><option value={appliane}>{appliance}</option>)}
                </select>
                <button type="button"><i className="fa fa-chevron-down"></i></button>
            </section>
        </main>
    )
}
const Appliance=()=>{
const [appliance, setAppliance] = useState({
    name: '',
    quantity: 0,
    watt: 0,
    hourPerDay: 0,
})

return (
    <SectionWrapper>
        <ApplianceList/>
        <section>
            <input type="text" name="quantity"/>
            <input type="text" name="watt"/>
            <input type="text" name="hourPerDay"/>
        </section>
        <div>
            <p>{watt}</p>
        </div>
    </SectionWrapper>
)
}



export const Appliances=()=>{
    return (
        <Section>
            <ApplianceHeader/>
            <SectionContainer>
                {appliances.map(()=><Appliance/>)}
            </SectionContainer>
            <EnergyResult>
        </Section>
    )
}