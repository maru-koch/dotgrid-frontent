import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ReactComponent as GoogleIcon } from './googlebtn.svg';
import './style.css';

export const Button = ({ text, btnType, className, btnStyle, stretch, round, children, ...props }) => (
  <button
    className={clsx(`button-base ${btnType || 'primary'}`, [
      { stretch, round, 'round-secondary': round && btnType === 'secondary' },
      className,
      btnStyle,
    ])}
    type="button"
    {...props}
  >
    {text || children}
  </button>
);

export const MainGreen = ({ text, children }) => (
  <Button type="submit" className="button-base stretch primary">
    {text || children}
  </Button>
);

export const GoogleBtn = ({ text }) => (
  <div className="wrapper-google-btn">
    <div className="wrapper-logo">
      <GoogleIcon />
    </div>
    <Button type="submit" stretch btnType="secondary">
      <span className="btn-text">{text}</span>
    </Button>
  </div>
);

Button.MainGreen = MainGreen;
Button.GoogleBtn = GoogleBtn;

Button.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  btnType: PropTypes.oneOf(['primary', 'secondary']),
  stretch: PropTypes.bool,
  round: PropTypes.bool,
  btnStyle: PropTypes.string, // deprecated - do not use
  className: PropTypes.string,
};

MainGreen.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};

GoogleBtn.propTypes = {
  text: PropTypes.string,
};
