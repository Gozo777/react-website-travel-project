import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

export const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text="Explore the hidden waterfall deep inside the Amazon"
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text="Travels via the Islands of Bali in a Private Cruise"
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text="Set Sail in the Greatest Ocean and enjoy your life"
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text="Experience Football view from the helicopter and drink a glass of wine"
              label='Luxury'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text="Ride through the Sahara Desert and look at canals first time ever"
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;