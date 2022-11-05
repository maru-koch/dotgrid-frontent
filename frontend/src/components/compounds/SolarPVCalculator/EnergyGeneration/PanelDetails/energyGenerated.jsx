import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {PanelDetails, WeatherInfo, EnergyForcast} from "../EnergyGeneration"
import {SectionContainer, Section } from "../../../elements/Sections"
import classes from "../EnergyConsumption/energyConsumed.module.css"

export const EnergyGenerated =()=>{
    /*
    This component displays a Tab panels that shows;
    1. Solar Panel Details - ()
    2. Weather Info
    3. Energy Forcast
     */
    return (
         <SectionContainer>
            <Section bg={{backgroundColor:'var(--primary-color)', minWidth:'100%', margin:'0px', padding:'0px' }}>
                 {/* The header shows the logo */}
                <Tabs className={classes.tabs} defaultIndex={1} selectedIndex={energyIndex} onSelect={(index) => setEnergyIndex(index)}>
                    <TabList className={classes.tablist}>
                        <Tab className={classes.tab}>Solar Panel Details</Tab>
                        <Tab className={classes.tab}>Weather Info</Tab>
                        <Tab className={classes.tab}>Energy Forcast</Tab>
                    </TabList>
                    <TabPanel>
                        {/* This panel displays the inputs to provide information about the solar panel */}
                        <PanelDetails/>
                    </TabPanel>
                    <TabPanel>
                         {/* This panel displays input to provide information about the weather*/}
                        <WeatherInfo/>
                    </TabPanel>
                    <TabPanel>
                         {/* This panel displays input to provide information about the weather*/}
                        <EnergyForcast/>
                    </TabPanel>
                </Tabs>
            </Section>
        </SectionContainer>
    )
}