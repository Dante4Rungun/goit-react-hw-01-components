import styled from './FriendList.module.css'
import PropTypes from 'prop-types';

function isOnline(bool) {
  const color = bool === true ? '#00FF77' : '#FF0000'
  return color
}

const FriendListItems = ({ friend }) => {
  return (
    <li className={styled.item} key={friend.id}>
      <span className={styled.status} style={{backgroundColor: isOnline(friend.isOnline)}}></span>
      <img className={styled.avatar} src={friend.avatar} alt={friend.name} />
      <p className={styled.name}>{friend.name}</p>
    </li>
  )
}

FriendListItems.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
  })
}

export const FriendList = ({friends}) => {
  return (
    <ul className={styled.friend_list}>
      {friends.map(friend => (
        <FriendListItems friend={friend}/>
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
  })
}