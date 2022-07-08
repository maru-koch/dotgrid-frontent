
import React from 'react';
import './authLayout.css';
import PropTypes from 'prop-types';
import { Header } from '../components/compounds/Header';
import { Footer } from '../components/compounds/Footer';

import clsx from 'clsx';

export const PageLayout = ({ children, bodyClassName }) => (
  <>
   <Header/>
    <div className={clsx('form-container', bodyClassName)}>
      <main className="nav-content">{children}</main>
    </div>
    <Footer/>
  </>
);

PageLayout.propTypes = {
  children: PropTypes.node,
  headerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
};