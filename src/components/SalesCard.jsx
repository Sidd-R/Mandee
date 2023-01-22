import React from 'react';

function SalesCard({deal,profile}) {
  return (
    <div className='sales-card-main'>
      <img src={require(`../uploads/${deal.picture}`)}  className='sales-img' />
      <div className="sales-price">Rs. {deal.price} /kg</div>
      <div className="sales-info">{deal.quantity} kg</div>
      {profile == 0?<div className="sales-info">sold to {deal.name}</div>:null}
    </div>
  );
}

export default SalesCard;