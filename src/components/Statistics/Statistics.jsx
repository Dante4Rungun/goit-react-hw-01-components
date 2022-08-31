import styled from './Statistics.module.css'
import PropTypes, { object } from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({title, stats}) => {
  return (
    <section className={styled.statistics}>
      {title != null && (
        <h2 className={styled.title}>{title}</h2>
      )}
      
      <ul className={styled.stat_list}>
        {stats.map(stat => (
          <li key={stat.id} className={styled.item} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={styled.label}>{stat.label}</span>
            <span className={styled.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(object)
}