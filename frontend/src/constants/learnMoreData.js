

import automation_img from '../assets/images/learnmore_automation.jpg'
import analytics_img_1 from "../assets/images/learnmore_analytics.jpg"
import analytics_img_2 from "../assets/images/learnmore_analytics2.jpg"
import smart_meter_img from "../assets/images/learnmore_smart_meter.jpg"

const analytics_description =`
                                As the world moves from fossil energy towards the cleaner 
                                solar options, data holds the potential to unlock the value 
                                inherent in powering how the energy generated is being consumed
                                and the pattern in the consumption. This insight will help the 
                                stake holders and energy managers to best optimize the system and 
                                understand their customers. It provides access, for the enterprise 
                                user to the energy consumption patterns to the clients connect to 
                                the grid. is availableDotgrid analytics provides you with the best 
                                analytical solution to derive insight from your energy data. energy 
                                insight and optimization for the. <br> Dotgrid provides the tools and 
                                services to harness your energy data
                                `

const smart_metering_description =`
                                As the world moves from fossil energy towards the cleaner 
                                solar options, data holds the potential to unlock the value 
                                inherent in powering how the energy generated is being consumed
                                and the pattern in the consumption. This insight will help the 
                                stake holders and energy managers to best optimize the system and 
                                understand their customers. It provides access, for the enterprise 
                                user to the energy consumption patterns to the clients connect to 
                                the grid. is availableDotgrid analytics provides you with the best 
                                analytical solution to derive insight from your energy data. energy 
                                insight and optimization for the. <br> Dotgrid provides the tools and 
                                services to harness your energy data`  

const automation_description =`
                                As the world moves from fossil energy towards the cleaner 
                                solar options, data holds the potential to unlock the value 
                                inherent in powering how the energy generated is being consumed
                                and the pattern in the consumption. This insight will help the 
                                stake holders and energy managers to best optimize the system and 
                                understand their customers. It provides access, for the enterprise 
                                user to the energy consumption patterns to the clients connect to 
                                the grid. is availableDotgrid analytics provides you with the best 
                                analytical solution to derive insight from your energy data. energy 
                                insight and optimization for the. <br> Dotgrid provides the tools and 
                                services to harness your energy data`

const analytics_content = `
                                Enjoy 24/7 power supply without the extra cost of buying fuel, the 
                                stress of enduring long queue at the patrol station, or the noise 
                                pol ution. Enjoy 24/7 power supply without the extra cost of buying 
                                fuel, the stress of enduring long queue at the patrol station, or 
                                the noise pol ution.
`
export const learnMoreData = {
    analytics:{
        image:{analytics_img_1},
        description:{
            title: "Energy Analytics",
            content: {analytics_description}
        },
        sections:{
            1:{
                heading:"",
                image:{analytics_img_1},
                content:""
            },
            2:{
                heading:"Why Dotgrid Analytics?",
                image:{analytics_img_2},
                content:{analytics_content}
            },
            3:{
                heading:"Why Dotgrid Analytics?",
                image:{analytics_img_2},
                content:{analytics_content}
            }
        }
    },
    smartMeter:{
        image: {smart_meter_img},
        description:{
            title: "Smart Metering",
            content: {smart_metering_description}
        },
        sections:{
            1:{
                heading:"",
                image:{smart_meter_img},
                content:{analytics_content}
                },
            2:{
                heading:"Performance Optimization",
                image:{smart_meter_img},
                content:""
            },
            3:{
                heading:"Performance Optimization",
                image:{smart_meter_img},
                content:{analytics_content}
            }
        }
    },
    automation:{
        image: {automation_img},
        description:{
            title: "Energy Automation",
            content: {automation_description}
        },

        sections:{
            1:{
                heading:"",
                image:{automation_img},
                content:{analytics_content}
                },
            2:{
                heading:"Monitoring and Reporting",
                image:{automation_img},
                content:{analytics_content}
            },
            3:{
                heading:"Monitoring and Reporting",
                image:{automation_img},
                content:{analytics_content}
            }
        }
    }
       
}
    
   
   

