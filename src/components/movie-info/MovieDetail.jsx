import React from 'react';
import styles from './MovieInfo.module.css';

const MovieDetail = ({ label, value }) => (
  <div className={`border-l-4 border-green-500 pl-4 ${styles.detailCard}`}>
    <h3 className={`text-green-500 ${styles.detailLabel}`}>{label}</h3>
    <p className="text-gray-300">{value}</p>
  </div>
);

export default MovieDetail;