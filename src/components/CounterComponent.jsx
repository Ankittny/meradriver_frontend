
"use client"
import React from 'react';
import CountUp from 'react-countup';
// import "../styles/counter.scss";
import { FaHeart, FaHandshake, FaUserTie, FaMapMarkerAlt } from 'react-icons/fa';

const CounterComponent = () => {
  const counters = [
    { icon: <FaHeart color="red" />, end: 17553, label: 'Happy Customers' },
    { icon: <FaHandshake />, end: 224, label: 'Successful Drives' },
    { icon: <FaUserTie />, end: 572, label: 'Successful  Drivers' },
    // { icon: <FaMapMarkerAlt />, end: 240, label: 'Successful  Covered' },
  ];

  return (
    <div className='counter'>
      <div className='container'>
        <div className='row '>
            <div className='col-lg-6 fc-fix d-flex'>
            {counters.map((counter, index) => (
            <div className='' key={index}>
              <div className='counter-box'>
                <div className='icon'>{counter.icon}</div>
                <h2>
                  <CountUp start={0} end={counter.end} duration={2.5} />
                </h2>
                <p>{counter.label}</p>
              </div>
            </div>
          ))}
            </div>
            <div className='col-lg-6'>
                
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
