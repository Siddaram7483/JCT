import { useState } from 'react';
import styles from './Team.module.css';

const Team = () => {
  // State for team members
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'HEMANT ',
      role: 'Founder & Owner',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec sem aliquet fermentum.',
      image: 'https://via.placeholder.com/150',
      social: {
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        facebook: 'https://www.facebook.com/'
      }
    },
    {
      id: 2,
      name: 'GAGAN',
      role: 'Head of Operations',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: 'https://via.placeholder.com/150',
      social: {
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        facebook: 'https://www.facebook.com/'
      }
    },
    {
      id: 3,
      name: 'Raju ',
      role: 'Care Taker',
      description: 'Integer convallis nunc ac consectetur tincidunt. Curabitur hendrerit vehicula purus, vel bibendum.',
      image: 'https://via.placeholder.com/150',
      social: {
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        facebook: 'https://www.facebook.com/'
      }
    },
    // Add more team members as needed
  ]);

  // Function to add a new team member
  const addTeamMember = () => {
    const newMember = {
      id: teamMembers.length + 1,
      name: 'New Team Member',
      role: 'Role',
      description: 'Description',
      image: 'https://via.placeholder.com/150',
      social: {
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        facebook: 'https://www.facebook.com/'
      }
    };

    setTeamMembers([...teamMembers, newMember]);
  };

  return (
    <section id="team" className={styles.team}>
      <div className={styles.gradientBackground}>
        <h2>Meet Our Team</h2>
        <p>Get to know the passionate individuals behind JCT Orphanage.</p>
      </div>

      <div className={styles.teamMembers}>
        {teamMembers.map(member => (
          <div key={member.id} className={styles.teamMember}>
            <img src={member.image} alt={member.name} className={styles.memberImage} />
            <div className={styles.memberInfo}>
              <h3>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberDescription}>{member.description}</p>
              <div className={styles.socialLinks}>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className={`fab fa-linkedin ${styles.socialIcon}`}></i>
                </a>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                  <i className={`fab fa-twitter ${styles.socialIcon}`}></i>
                </a>
                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                  <i className={`fab fa-facebook ${styles.socialIcon}`}></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={addTeamMember} className={styles.addButton}>Add New Team Member</button>
    </section>
  );
};

export default Team;
