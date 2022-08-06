import {Modal, Pricing, PriceForm} from '../../components/compounds'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import {PageLayout} from '../../layout'


const initialState =  {   
            priceModel:'',
            price: '',
            features: [],
            modelType:''
        }


export const PricingPage=()=>{

    const {price, priceModel, features, modelType} = useSelector(state => state.price)

    console.log('modelType', modelType)
    const [open, setOpen] = useState(false)
    const [plan, setPlan] = useState(initialState)

    const openModal=()=>{
        setOpen(true)
    };

    const closeModal=()=>{
        setOpen(false)
    }

    useEffect(()=>{
        setPlan({   
            priceModel: priceModel['priceModel'],
            price: price['price'],
            features: features['features'],
            modelType: modelType['modelType'],
        })
    },[price, priceModel, features, modelType])

    console.log('plan', plan)
    return (
        <PageLayout>
            <Pricing openModal={openModal}/>
            <Modal open={open} close ={closeModal}>
               <PriceForm plan={plan}/>
            </Modal>
        </PageLayout>
    )
}