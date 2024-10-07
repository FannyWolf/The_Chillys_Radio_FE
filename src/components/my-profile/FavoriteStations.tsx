import React from 'react';
import { IStation } from '../../types/interfaces';
import styles from './favoriteStations.module.css';
import FavoriteHeart from '../../components/favorites/FavoriteHeart'; 
import { useAppSelector } from '../../redux/hooks';
import { Link } from 'react-router-dom';

const FavoriteStations: React.FC = () => {
    const favoriteStations = useAppSelector(state => state.favorites.favorites);

    return (
        <div className={styles.favoriteStationsGrid}>
            {favoriteStations.map((station: IStation) => (
                <div key={station.stationuuid} className={styles.favoriteStationItem}>
                    
                    <Link to={`/${station.stationuuid}`} className={styles.stationLink}>
                        <img 
                            src={station.favicon || "/media/TheCR_Banner1_res.jpg"}  
                            alt={`${station.name} icon`} 
                            className={styles.favoriteStationIcon} 
                        />
                    </Link>

                    <div className={styles.favoriteIconContainer}>
                        <div className={styles.heartBackground} />
                        <FavoriteHeart station={station} /> 
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FavoriteStations;



