import React from 'react';
import MeetupItem from './MeetupItem';
import styles from './MeetupList.module.css';

const MeetupList = ({ meetups }) => {
  return (
    <ul className={styles.list}>
      {meetups && meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
