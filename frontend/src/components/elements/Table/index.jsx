import PropTypes from 'prop-types'

const SelectDate=()=>{
    return(
        <main>
            <div>
                <p>2022</p>
            </div>
            <div>
                <div>
                    <i class="fa fa-chevron-left"></i>
                </div>
                <p>June</p>
                 <div>
                    <i class="fa fa-chevron-right"></i>
                </div>
            </div>
        </main>
    )
}
export const Table=({hour, rate})=>{
  // Display total energy consumption on the analytics panel
return(
    <main className ="container">
        <SelectDate/>
        <section className ="wrapper">
           <table>
                <row>

                </row>
           </table>
        </section>
    </main>
)
}

Table.propTypes = {
    total: PropTypes.number,
}