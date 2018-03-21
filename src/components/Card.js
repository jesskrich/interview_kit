import React from 'react';
import CardSection from './CardSection';

const Card = ({ item }) => {
  const {
    full_name,
    description,
    stargazers_count,
    license,
    url } = item;

  return (
    <div className='card'>
      <CardSection>
        <a style={{textDecoration: 'none'}} href={url}>
          <h4 style={{color: '#527dbf'}}>{full_name}</h4>
        </a>
        <h4>{description || 'No description available.'}</h4>
      </CardSection>
      <CardSection>
        <h4>STARS</h4>
        <h4>{stargazers_count}</h4>
      </CardSection>
      <CardSection>
        <h4>LICENSE</h4>
        <h4>{license ? license.name : 'none'}</h4>
      </CardSection>
    </div>
  )
}

export default Card;
