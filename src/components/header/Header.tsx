
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { headerLinks, homeLink } from './links';
import { useAppSelector } from '../../redux/hooks';
import ActivePlayedHeader from '../active-played-header/ActivePlayedHeader';
import ProfileLinkHeader from './ProfileLinkHeader';
import FiltersHeader from './FiltersHeader';
import SearchFormHeader from './SearchFormHeader';


  
    export default function Header() {
      const username = useAppSelector(state => state.user.user.name);
    
      return (
        <header className={styles.header}>
          <div className={styles.topLine}>
            <Link to={homeLink.path} ><img src="/public/media/logo.png" alt={homeLink.label} className={styles.logo} aria-label="Home"/></Link>
            <div className={styles.activeStationWrapper}>
              <ActivePlayedHeader />
            </div>
            <ProfileLinkHeader name={username} />
          </div>
    
          <div className={styles.separator}></div>
    
          <div className={styles.bottomLine}>
            <FiltersHeader headerLinks={headerLinks} />
            <SearchFormHeader />
          </div>
        </header>
      );
    }
  