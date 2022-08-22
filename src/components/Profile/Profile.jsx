import PropTypes from 'prop-types';
import styles from './Profile.module.css'
import { Description } from './Description/Description'
import { Stats } from './Stats/Stats';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return <div className={styles.profile}>
    <Description
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
    />
    <Stats
      followers={stats.followers}
      views={stats.views}
      likes={stats.likes}     
    />
  </div>
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
}