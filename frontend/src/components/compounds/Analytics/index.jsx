import { TotalPanel, Graph, MetricPanel} from '../../molecules'
import './index.css'
import PropTypes from 'prop-types';

export const Analytics =({children, style})=>{
    return (
        <div className = "container">
            <div className = "wrapper">
                <section className = "right">
                    <TotalPanel/>
                    <Graph/>
                </section>
                <section className = "right">
                    <MetricPanel/>
                </section>
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