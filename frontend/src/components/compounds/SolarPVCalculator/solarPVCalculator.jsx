import { useState } from 'react';
import classes from './solarPVCalculator.module.css'
import { Section, SectionContainer, SectionWrapper, Button } from '../../elements';
import { EnergyConsumed } from "./EnergyConsumption";
import { EnergyHeader } from "./EnergyHeader";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export const SolarPVCalculator =()=>{
    const [energyIndex, setEnergyIndex] = useState(0)
    const [energy, setEnergy] = useState([])
    return (
        
        <SectionContainer>
            <Section bg={{backgroundColor:'var(--primary-color)', minWidth:'100%', margin:'0px', padding:'0px' }}>
                 {/* The header shows the logo */}
                <EnergyHeader/>
                <Tabs className={classes.tabs} defaultIndex={1} selectedIndex={energyIndex} onSelect={(index) => setEnergyIndex(index)}>
                    <TabList className={classes.tablist}>
                        <Tab className={classes.tab}>Energy Consumed</Tab>
                        <Tab className={classes.tab}>Energy Generated</Tab>
                    </TabList>
                    <TabPanel>
                        {/* This panel displays the Energy consumption UI */}
                        <EnergyConsumed/>
                    </TabPanel>
                    <TabPanel>
                         {/* This panel displays the Energy Generation UI */}
                        <h1>generated</h1>
                    </TabPanel>
                </Tabs>
            </Section>
        </SectionContainer>
       
    )
}