import React from 'react';
import {useNavigate} from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetup = () => {
    const navigate = useNavigate();

    const AddMeetupHandler = (data) => {
        fetch("https://react-simple-project-d105c-default-rtdb.firebaseio.com/meetups.json",
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        .then(() => {
            navigate('/')
        })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
        </section>
    );
};

export default NewMeetup;