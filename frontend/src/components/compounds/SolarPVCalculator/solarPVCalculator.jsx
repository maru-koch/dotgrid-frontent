import { useState } from 'react';
import { Section, SectionContainer, SectionWrapper, Button } from '../../elements';
import { EnergyConsumed } from "./EnergyConsumption";
import { EnergyHeader } from "./EnergyHeader";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export const SolarPVCalculator =()=>{
    const [energy, setEnergy] = useState(0)
    return (
        
        <SectionContainer>
            <Section bg={{backgroundColor:'var(--primary-color)', minWidth:'800px', margin:'0px', }}>
                <EnergyHeader/>
                <Tabs defaultIndex={1} selectedIndex={energy} onSelect={(index) => setEnergy(index)}>
                    <TabList>
                        <Tab>Energy Consumed</Tab>
                        <Tab>Energy Consumed</Tab>
                    </TabList>
                    <TabPanel>
                        <h1>consumed</h1>
                    </TabPanel>
                    <TabPanel>
                        <h1>generated</h1>
                    </TabPanel>
                </Tabs>
            </Section>
        </SectionContainer>
       
    )
}