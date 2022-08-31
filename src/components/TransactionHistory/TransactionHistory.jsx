import styled from './TransactionHistory.module.css'
import PropTypes, { object } from 'prop-types';

const ChangeRowColor = (index) => {
  if ((index + 1) % 2 !== 0) {
    return '#ffffff'
  }
  else {
    return 'rgb(224, 231, 238)'
  }
}

const TransactionHistoryRecord = ({id, type, amount, currency, index}) => {
  return (
    <tr key={id} style={{backgroundColor:ChangeRowColor(index)}}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
}

TransactionHistoryRecord.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
  index: PropTypes.number 
}

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styled.transaction_history}>
      <thead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionHistoryRecord
            id={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            index={items.findIndex(elem => elem.id === item.id)}
          />
        ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(object),
}