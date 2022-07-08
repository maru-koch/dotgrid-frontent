
import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components/compounds/Header';
import { Footer } from '../components/compounds/Footer';
import './pageLayout.css'


export const PageLayout = ({ children, bodyClassName }) => (
  <div className ="layout">
      <Header/>
          <div className="layout__container">
              <main className="layout__main">{children}</main>
          </div>
      <Footer/>
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node,
  headerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
};