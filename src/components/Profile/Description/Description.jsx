import PropTypes from 'prop-types';
import styles from './Description.module.css'

export const Description = ({ username, tag, location, avatar }) => {
  return <div className={styles.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={styles.avatar}        
    />
    <p className={styles.name}>{username}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
}

Description.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,  
}