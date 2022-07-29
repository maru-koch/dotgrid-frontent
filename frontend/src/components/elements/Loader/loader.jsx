import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.module.css';
import {ReactComponent as Loading} from './loading.svg'

export const Loader = ({ absolute, open, text}) => {
    return (
    <div className={classes.loader__container}>
        <Loading/>
        <p>{text}</p>
    </div>
    );
  }


Loader.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string,
  absolute: PropTypes.bool,
};
