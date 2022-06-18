import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './style.css';

export const Loader = ({ absolute, open }) => {
  if (open) {
    return <div className={clsx('loader', { 'not-fixed': absolute, fixed: !absolute })}>Loading...</div>;
  }
  return null;
};

Loader.propTypes = {
  open: PropTypes.bool,
  absolute: PropTypes.bool,
};
