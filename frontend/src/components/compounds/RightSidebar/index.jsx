import PropTypes from 'prop-types';

import './style.css';
import { Button } from '../../elements';

const basePropTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  btnText: PropTypes.string,
};

const HideSidebar = () => {
  const sidebar = document.querySelector('.RightSidebar-container');
  sidebar.classList.toggle('RightSidebar-inactive');
};

export const RightSidebar = ({ title, children, btnText }) => (
  <div className="RightSidebar-container">
    <div className="RightSidebar-title" onClick={HideSidebar} onKeyPress={HideSidebar} aria-hidden="true">
      <i className="fa fa-caret-left" />
      <p>{title}</p>
    </div>
    <div className="RightSidebar-body">{children}</div>
    {btnText ? <Button stretch btnType="primary" text={btnText} /> : ''}
  </div>
);

RightSidebar.propTypes = {
  ...basePropTypes,
};
