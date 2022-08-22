import { Profile } from "./Profile/Profile";
import user from "./Profile/ProfileInfo/user.json"
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/StatiscticsInfo/data.json"
import { flexDirection } from "styled-system";
import { FriendList } from "./FriendList/FriendList";
import friends from "./FriendList/FriendListInfo/friends.json"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/TransactionHistoryInfo/transactions.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        display: 'flex',
        flexDirection: 'column'
      }}
      >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
