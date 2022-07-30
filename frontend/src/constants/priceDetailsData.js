
export const priceDetailsData = {
    individual:{
        plans:[
        {   
            priceModel:'basic',
            price: 'free',
            features: ['View Energy generated', '1 control device']
        },
        {   priceModel:'starter',
            price:  '$ 20 / year',
            features: ['View Energy generated', 'automate energy consumptiion', '2 control devices']
        },

        {
            priceModel:'pro',
            price: '$ 100 / year',
            features: ['View Energy generated', 'Monitor energy consumption', 'upto 5 control devices', 'Energy sharing', 'Energy optimization', 'Control appliances remotely']
        }],

        description: "Suitable for an Appartment or home use. Gives you the autonomy to control your energy consumption and save cost"
    },

    enterprise:{
        plans:[
        {   
            priceModel:'basic',
            price: '$ 200 / year ',
            features: ['Two Users', 'View Energy generated', 'connect upto 5 devices', 'Reporting', 'Export Data as CSV']
        },
        {   priceModel:'starter',
            price: '$ 500 / year',
            features: ['max of 10 users', 'connect 20 control devices', 'View Energy generated', 'Reporting', 'Export Data as CSV']
        },

        {
            priceModel:'pro',
            price: '$ 1000 / year',
            features: ['unlimited Users', 'Manage Clients Data', 'Reporting features', 'Export Data as CSV', 'Grid monitoring', 'Energy Optimization']
        }],

        description: "For cities or Estates or mini-grid management. helps managers derive energy insight and make the best decisions base on patterns in energy generation and consumption"
    },
}
    
   
   

