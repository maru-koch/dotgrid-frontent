import './style.css';
import { Text, SearchBar } from '../../../components/elements';

export const DashHeader = () => (
  <div className="dash-navbar">
    <div>
      <SearchBar />
    </div>
    <div className="name-holder">
      <Text text="Maru Koch" color="grey60" />
      <span className="h-space" />
      <span className="name-icon">M</span>
    </div>
  </div>
);
