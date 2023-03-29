
import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components/compounds/Header';
import { Footer } from '../components/compounds/Footer';



export const PageLayout = ({ children, bodyClassName }) => (

  // Layout is the wrapper component for every page
  // it contains the header, main and footer
  
  // LAYOUT WIDTH - 100%

  <div className ="w-full">
      <Header/>
          <div className="">
              <main className="">{children}</main>
          </div>
      <Footer/>
  </div>
  
);

PageLayout.propTypes = {
  children: PropTypes.node,
  headerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
};