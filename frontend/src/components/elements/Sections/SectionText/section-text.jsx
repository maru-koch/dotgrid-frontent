import PropTypes from 'prop-types'
import { Button } from '../../../elements'
import  classes from './section-text.module.css'


export const SectionText = ({btn, bg, title, description, btnText, openModal})=>{
    return (
    <div className="bg-green-500 w-full md:w-1/2">
        <div className="flex justify-center items-center m-5 md:m-10">
            <div className ="text-center md:text-left">
                <h2 className="text-2xl text-poppins font-bold ">{title}</h2>
                <p className="text-md text-mulish mt-5">{description}</p>
                <div className="flex justify-end items-center">
                    {btn && <Button text={btnText} onClick={()=>openModal()}/>}
                </div>
            </div>
            {/* Show button if only btn is true */}
          
        </div>
    </div>
    )
}

SectionText.propTypes = {
    btn: PropTypes.bool.isRequired,
    style: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    btnText: PropTypes.string,
}