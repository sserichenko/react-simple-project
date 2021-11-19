import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import styles from "./MainNavigation.module.css"
import FavouritesContext from '../../store/favourites-context';

const MainNavigation = () => {

    const FavouritesCtx = useContext(FavouritesContext)

    return (
        <header className={styles.header}>
            <div className={styles.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to="/">All meetups</Link></li>
                    <li><Link to="/new-meetups">Add New Meetup</Link></li>
                    <li><Link to="favourites">Favourites <span>{FavouritesCtx.totalFavourites}</span></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;