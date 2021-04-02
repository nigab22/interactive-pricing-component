import React, { useState, useEffect, useRef } from 'react';
import './Content.css';
import './Toggle.css';
import checkmark from './assets/icon-check.svg';

export default function Component() {
  const [views, setViews] = useState('100K');
  const [price, setPrice] = useState(16);
  const [yearly, setYearly] = useState(false);
  const [months, setMonths] = useState(1);
  const [discount, setDiscount] = useState(0);
  const priceRef = useRef(0);

  const changePricing = () => {
    const calculatePrice = (amount) => {
      return (amount * months - amount * months * discount).toFixed(2);
    };

    let val = priceRef.current.value;
    switch (val) {
      case '1':
        setPrice(calculatePrice(8));
        setViews('10K');
        break;
      case '2':
        setPrice(calculatePrice(12));
        setViews('50K');
        break;
      case '3':
        setPrice(calculatePrice(16));
        setViews('100K');
        break;
      case '4':
        setPrice(calculatePrice(24));
        setViews('500K');
        break;
      case '5':
        setPrice(calculatePrice(36));
        setViews('1M');
        break;
    }
  };

  useEffect(() => {
    if (yearly) {
      setMonths(12);
      setDiscount(0.25);
      changePricing();
    } else {
      setMonths(1);
      setDiscount(0);
      changePricing();
    }
  }, [yearly]);

  return (
    <div className="container">
      <div className="views">{views} Pageview</div>
      <div className="price-slider">
        <input
          ref={priceRef}
          onChange={changePricing}
          className="range-slider"
          type="range"
          min="1"
          max="5"
          step="1"
          defaultValue="3"
        />
      </div>

      <div className="price">
        <span className="amount">${price}</span>
        <span className="rate">/ {yearly ? 'year' : 'month'}</span>
      </div>
      <div className="billing">
        <div>Monthly Billing</div>
        <label className="switch" onChange={() => setYearly(!yearly)}>
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <div>Yearly Billing</div>
        <div className="discount">-25%</div>
      </div>
      <hr />
      <div className="features-list">
        <p>
          <img src={checkmark} alt="checkmark" />
          Unlimited websites
        </p>
        <p>
          <img src={checkmark} alt="checkmark" />
          100% data ownership
        </p>
        <p>
          <img src={checkmark} alt="checkmark" />
          Email reports
        </p>
      </div>
      <button>Start my trial</button>
    </div>
  );
}
