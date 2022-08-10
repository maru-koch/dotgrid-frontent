import { Section, SectionWrapper } from "../../../../elements"

export const EnergyResult=({total})=>{
    return (
        <tfoot>
            <tr>
                <td>Total Energy Consumed 'watt/per day'</td>
                <td>{total}</td>
            </tr>
        </tfoot>
                
    )
}