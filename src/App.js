import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {

  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} ></img>
  </div>
}

const foodIlike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLo_gQFSt1FatcWZrlkjO1U8g-ZS75D2uDg&usqp=CAU",
  },
  {
    id: 2,
    name: "Samyeopsal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0h6IRD69vXW-dyvqtBlftTmJVWiTb4eC-A&usqp=CAU",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBcfGT9xxIJJvCqfwQEv2O1LD0eAEww_ZofIjICOhRcSVxBAHdELU8qgj7E6Tex7zSMXw&usqp=CAU",
    rating: 4.8
  },
  {
    id: 4,
    name: "Kimbap",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6yO2ikqocmAUI9gZsfCWP0oBmMRr2MfF8g&usqp=CAU",
    rating: 4.1,
  }
]

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
  <div>
    {foodIlike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
    )}
  </div>
  );

}

export default App;
