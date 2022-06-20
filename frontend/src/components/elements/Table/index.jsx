import { useState } from 'react'
import PropTypes from 'prop-types'
import { data } from './data'
import './index.css'

const SelectDate=()=>{
    return(
        <main className="wrapper">
            <div>
                <p>2022</p>
            </div>
            <div>
                <div>
                    <i className="fa fa-chevron-left"></i>
                </div>
                <p>June</p>
                 <div>
                    <i className="fa fa-chevron-right"></i>
                </div>
            </div>
        </main>
    )
}
export const Table=({rate_per_hour})=>{
  // Display total energy consumption on the nalytics panel
    const data_device = data[0]['device_1']
    const [header, setHeader] = useState([])
    const [row, setRow] = useState([])
    const [column, setColumn] = useState([])


let arrData=Object.keys(data[1]["device_2"])


return(
    <main className ="container">
        <SelectDate/>
        <section className ="wrapper">
           <table className="table" cellSpacing={10}>
            <thead>
                <td></td>
                {data_device[arrData[0]].map((item,index)=><th key={index}>{item[0]}</th>)}
            </thead>
                <tbody>
                    {/* For each row,  */}
                {arrData.map((x,idx)=>
                    <tr key={idx}><th>{x}</th>
                        {
                            data_device[x].map((a,idy)=>
                            <td key={idy}>{a[1]}</td>)
                        }
                    </tr>)}
                </tbody>
           </table>
        </section>
    </main>
)
}

Table.propTypes = {
    total: PropTypes.number,
}