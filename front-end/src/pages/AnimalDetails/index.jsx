import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './styles.css'

export const AnimalDetails = (state) =>  {
    console.log(state)
  const screens = ['Home', 'About', '']
//   const {animal} = state.animal

  return (
    <div>
      <header className='headerHome'>
        <h2>Adoção</h2>
        <nav>
          <ul>
            {screens.map(screen => {
              return (<li><Link to={`/${screen}`} className='menu'>{screen == ''?'Logout':screen}</Link></li>)
            })}
          </ul>
        </nav>
      </header>
      <ul>
        {/* <div className='card' key={animal.id}>
            <li>{animal.name}</li>
            <li>{animal.breed}</li>
            <li>{animal.age} {animal.age == "1"?'ano':'anos'}</li>
            <li>{animal.gender}</li>
            <li>{animal.owner}</li>
            <li>{animal.description}</li>
        </div> */}
      </ul>
    </div>
  );
};