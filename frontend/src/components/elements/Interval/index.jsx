

export const Interval=()=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum
return(
    <>
    <main className="wrapper">
         <section>
            <p>Interval</p>
        </section>
         <section className="wrapper">
            <div>
                <p>Start</p>
                <input type="date"/>
            </div>
            <div>
                 <p>End</p>
                <input type="date"/>
            </div>
        </section>
    </main>
    </>
)
}