import {Modal, Pricing, PriceForm} from '../../components'
import { useState } from 'react'
import {PageLayout} from '../../layout'
import priceImage from '../../assets/images/pricing_image.jpeg'

const word ={
    title: 'Valuable Insights',
    content :"Be empowered. with insight from your energy generation and consumption data, you can do more."
}
export const PricingPage=()=>{

    const [open, setOpen] = useState(false)
    const [priceModel, setPriceModel] = useState(false)

    const openModal=({priceModel})=>{
        // opens the Modal and gets the price model to populate the form
        setOpen(true)
        setPriceModel(priceModel)
    };

    const closeModal=()=>{
        setOpen(false)
    }


    return (
        <PageLayout>
            {/* <SectionHeader title = 'Pricing' subtitle = 'Select a suitable plan for your needs'/>
            <SectionWrapper bg ={{backgroundColor:"#ECECEC", height: 500}}>
                <SectionText 
                    title ={word.title} 
                    description ={word.content}
                    btn={true}
                    btnText="Get Plans"
                    />
                <SectionImage 
                    image={priceImage} 
                    height={'100%'} 
                    width={'50%'}
                    wrapperStyle={{height:400, width: '100%'}}
                    containerStyle={{display:'flex', justifyContent: 'center', alignItems: 'center'}}/>
            </SectionWrapper> */}
            <Pricing openModal={openModal}/>
            {<Modal open={open} close ={closeModal}>
                <PriceForm openModal={openModal} priceModel={priceModel}/>
            </Modal>}
        </PageLayout>
    )
}