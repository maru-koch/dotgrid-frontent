import PropTypes from 'prop-types'
import './index.css'

export const Metrics=({num, title, subtitle})=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum
return(
    <>
    <main>
         <section>
            <div>
                <h2>{4.82}</h2>
            </div>
            <div>
                <p>{"AVERAGE"}</p>
            </div>
        </section>
    </main>
    </>
)
}

Metrics.propTypes={
    integer: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string

}