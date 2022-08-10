import { useState } from 'react';
import { Section, SectionContainer, SectionWrapper, Button } from '../../elements';
import { EnergyConsumed } from "./EnergyConsumption";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export const SolarPVCalculator =()=>{
    const [energy, setEnergy] = useState("consumed")


    return (
        <Tabs defaultIndex={1} selectedIndex={energy} onSelect={(index) => setEnergy(index)}>
            {/* <SelectEnergy setEnergy={setEnergy}/> */}
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
    )
}