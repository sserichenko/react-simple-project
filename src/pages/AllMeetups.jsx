import React, {useEffect, useState} from 'react';
import MeetupList from '../components/meetups/MeetupList'

const AllMeetups = () => {


  const [isLoading, setIsLoading] = useState(true)
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    fetch("https://react-simple-project-d105c-default-rtdb.firebaseio.com/meetups.json",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        .then((response) => {
            return response.json()
        })
        .then(data => {
          const meetups = []

          for(const key in data){
            const meetup = {
              id: key,
              ...data[key]
            }
            meetups.push(meetup)
          }

          setIsLoading(false)
          setMeetups(meetups)
        })
  }, [])

    if(isLoading){
      return (
        <section>
          <p>LOADING ....</p>
        </section>
      )
    }

    return (
        <section>
            <h1>All Meetups</h1>
            {
              meetups.length ? <MeetupList meetups={meetups} /> : "There are no Meetups"
            }
            
        </section>
    );
};

export default AllMeetups;