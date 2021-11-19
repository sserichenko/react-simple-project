import React from 'react';
import { useContext } from 'react';
import styles from "./MeetupItem.module.css"
import Card from "../ui/Card"
import FavouritesContext from "../../store/favourites-context"

const MeetupItem = ({id, title, image, description, address}) => {

    const favouriteCtx = useContext(FavouritesContext)
    
    const itemIsFavourite = favouriteCtx.itemIsFavourite(id)

    function toggleFavouriteStatusHandler(){
        if(itemIsFavourite){
            favouriteCtx.removeFavourite(id)
        }else{
            favouriteCtx.addFavourite({
                id, title, image, description, address
            })
        }
    }

    return (
        <li className={styles.item}>
            <Card>
               <div className={styles.image}>
                <img src={image} alt={title} />
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? "Remove from Favourites" : "Add to favourites"}</button>
                </div> 
            </Card>
        </li>
    );
};

export default MeetupItem;