import styled from './FriendListItem.module.css'
import PropTypes from 'prop-types';

function isOnlineColor(bool) {
    const color = bool === true ? '#00FF77' : '#FF0000'
    return color
}
  
export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={styled.item__container}>
            <span className={styled.status} style={{backgroundColor: isOnlineColor(isOnline)}}></span>
            <img className={styled.avatar} src={avatar} alt={name} />
            <p className={styled.name}>{name}</p>
        </div>
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number
    })
}
  