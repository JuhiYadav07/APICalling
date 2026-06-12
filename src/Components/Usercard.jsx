import React from 'react';

const userCard = (props) =>{
  console.log(props.data);
  return (
    <div className = 'user-card'>
      <img className='user-img' alt=""/>
      <h3>{props.data.name}</h3>
      <p>+91999999999</p>
      <p>user address</p>
      </div>
  );
};

export default userCard;