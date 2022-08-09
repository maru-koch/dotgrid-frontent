
const [appliances, setAppliances] = useState([0])

const ApplianceHeader =()=>
    <main>
        <p>Name of Appliance</p>
        <p>Qnt</p>
        <p>Watt</p>
        <p>He/Day</p>
        <p>Wh/D</p>
    </main>

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