import {DashCard } from '../../molecules/DashCard'

export const DashCardHolder=()=>{
    return (
        <div className="main-container">
            <div className="cards">
                <DashCard/>
                <DashCard/>
                <DashCard/>
            </div>
        </div>
    )
}