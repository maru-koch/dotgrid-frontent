import {Modal, Pricing, PriceForm} from '../../components'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import {PageLayout} from '../../layout'


const initialState =  {   
            priceModel:'',
            price: '',
            features: []
        }


export const PricingPage=()=>{

    const {price, priceModel, features} = useSelector(state => state.price)

    const [open, setOpen] = useState(false)
    const [plan, setPlan] = useState(initialState)

    const openModal=()=>{
        setOpen(true)
    };

    const closeModal=()=>{
        setOpen(false)
    }

    useEffect(()=>{
        console.log('pricingpage',price)
        setPlan({   
            priceModel: priceModel,
            price: price,
            features: features
        })
    },[price, priceModel, features])

    return (
        <PageLayout>
            <Pricing openModal={openModal}/>
            <Modal open={open} close ={closeModal}>
               <PriceForm plan={plan}/>
            </Modal>
        </PageLayout>
    )
}