import React from 'react';
import { DashHeader, SideBar, Text, RecentPickups, Welcome } from 'components';
import './index.css';
import { pickups } from 'components/molecules/RecentPickups/pickups';

export const OverviewPage = () => (
  <div className="overview">
    <div className="sidebar">
      <SideBar />
    </div>
    <div className="content">
      <div className="header">
        <DashHeader />
      </div>
      <div className="welcome">
        <Welcome />
      </div>
      <div className="head-text">
        <Text>Recent Pickups</Text>
        <div className="right-text">
          <Text>Your Total Points</Text>
          &nbsp;1769
        </div>
      </div>
      <div>
        {pickups.map((item) => (
          <RecentPickups {...item} key={item.id} />
        ))}
      </div>
    </div>
  </div>
);
