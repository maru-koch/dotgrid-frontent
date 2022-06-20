import PropTypes from 'prop-types'

export const Total=({ total })=>{
  // Display total energy consumption on the analytics panel
return(
    <main className ="container">
        <section className ="wrapper">
            <div className="total">
                <h2>{3.33}</h2>
            </div>
            <div>
                <div>
                    <div className="dot">
                    </div>
                </div>
                <div className ="unit">
                    <p>MW</p>
                </div>
            </div>
        </section>
    </main>
)
}

Total.propTypes = {
    total: PropTypes.number,
}