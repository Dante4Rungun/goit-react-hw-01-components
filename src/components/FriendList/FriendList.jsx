import styled from './FriendList.module.css'
import PropTypes, { object } from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
  return (
    <ul className={styled.friend_list}>
      {friends.map(friend => (
        <li className={styled.item} key={friend.id}>
          <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
        </li>        
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(object)
}