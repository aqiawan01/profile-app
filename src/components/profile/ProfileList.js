import React from 'react';
import styles from './ProfileList.module.css';
import Profile from './Profile.js';
import {profiles} from '../../profile-data.js';

const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team Members</h1>
        <div className={styles["profile-container"]}>
          {profiles.map((profile, index) => {
            const {img, name, job, company, link} = profile;
            return (
              <Profile 
                  key={index}
                  image={img}
                  name={name}
                  job={job}
                  company={company}
                  link={link}
             />
            )
          })}
        </div>
      </div>
        
    </section>
  )
}

export default ProfileList;