import './style.css';
import {useSelector} from 'react-redux'
import { Text, SearchBar } from '../../../components/elements';

export const DashHeader = () => {
  const { user } = useSelector(state => state.auth)
  console.log(user)
  return(
    <div className="dash-navbar">
      <div>
        <SearchBar />
      </div>
      <div className="name-holder">
        <Text text={`${user.first_name.toUpperCase()} ${user.last_name.toUpperCase()}`} color="grey60" />
        <span className="h-space" />
        <span className="name-icon">{user.first_name[0].toUpperCase()}</span>
      </div>
    </div>
    )
};
  