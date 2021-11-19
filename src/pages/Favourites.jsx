import React, {useContext} from 'react';
import FavouritesContext from "../store/favourites-context"
import Card from "../components/ui/Card"
import MeetupList from "../components/meetups/MeetupList"
import MeetupItem from '../components/meetups/MeetupItem';

const Favourites = () => {

    const favouriteCtx = useContext(FavouritesContext)

    return (
        <section>
            <Card>
                {
                    favouriteCtx.totalFavourites !== 0 
                    ?
                    <MeetupList meetups={favouriteCtx.favourites}/>
                    :
                    <h3 style={{padding: '30px 20px', textAlign: 'center'}}>There are no favourites. Want adding some?</h3>
                }
                
            </Card>
        </section>
    );
};

export default Favourites;