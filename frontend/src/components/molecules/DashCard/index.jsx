import './index.css'

export const DashCard=({title, icon, metrics})=>{
    return (
        <div className="card card-1">
            <div className="card__icon"><i class="fas fa-bolt"></i></div>
            <p className="card__exit"><i class="fas fa-times"></i></p>
            <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p className="card__apply">
            <a className="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
        </p>
    </div>
    )
}
