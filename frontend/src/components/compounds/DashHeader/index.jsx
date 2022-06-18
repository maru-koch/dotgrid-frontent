import './style.css';
import { Text, SearchBar } from '../../elements';

export const DashHeader = () => (
  <div className="dash-navbar">
    <div>
      <SearchBar />
    </div>
    <div className="name-holder">
      <Text text="David Michael" />
      <span className="h-space" />
      <span className="name-icon">Y</span>
    </div>
  </div>
);
