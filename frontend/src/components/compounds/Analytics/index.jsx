import { TotalPanel, Graph, MetricPanel, Chart} from '../../molecules'
import './index.css'
import PropTypes from 'prop-types';

export const Analytics =({children, style})=>{
    return (
        <div className = "analytics__container">
            <div className = "analytics__outer_wrapper">
                <div className = "analytics__inner_wrapper">
                    <section className = "analytics__right">
                        <TotalPanel/>
                        <Chart/>
                    </section>
                    <section className = "analytics__right">
                        <MetricPanel/>
                    </section>
                </div>
            </div>
        </div>
    )
}

// ${props.class} allows you to add additional css class from the parent component;
// this enables you to customize the card as suitable

Analytics.propTypes = {
    children : PropTypes.node,
    style : PropTypes.string
}