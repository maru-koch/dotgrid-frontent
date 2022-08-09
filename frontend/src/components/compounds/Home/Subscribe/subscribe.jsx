
import { useDispatch } from 'react-redux';
import {useState} from 'react';
import {Section, SectionHeader, SectionContainer} from '../../../elements/Sections'
import { AUTH_ACTIONS } from '../../../../store/reducer/auth/reducerSlice'
import classes from './subscribe.module.css'



export const Subscribe=(props)=>{  

    const dispatch = useDispatch();

    const { subscribe } = AUTH_ACTIONS

    const [email, setEmail] = useState({email:''})

    const onChangeHandler=(e)=>{
        setEmail({...email, [e.target.name]:e.target.value})
    }
    const onSubmitHandler=(e)=>{
        dispatch(subscribe(email))
    }


    return (
    <Section>
        <Section bg ={{padding: '50px'}}>
            <SectionHeader title ="Subscribe to News Letter" subtitle = "Be the first to Know about Important Events in the Solar Energy Industry" bg={{color:'grey'}}/>
            <div className={classes.subscribe__container}>
                <div className={classes.subscribe__wrapper}>
                    <input type="text" name ='email' placeholder = "Your Email" onChange={onChangeHandler}/>
                    <button onClick={()=>onSubmitHandler()}>Sign up</button>
                </div>
            </div>
        </Section>
    </Section>)
}

