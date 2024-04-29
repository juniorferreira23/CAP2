import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { userCollection } from '../../services/firebaseConfig';
import { Link } from "react-router-dom";

import './style.css';

export const Home = () =>  {

  const [animals, setAnimals ] = useState([])

  const screens = ['About', '']

  useEffect(() => {
    const getAnimals = async () => {
      const data = await getDocs(userCollection)
      console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      setAnimals(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }
    getAnimals();
  },[]);

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
        {animals.map(animal => {
          return (
            <div className='card' key={animal.id}>
              <li>{animal.name}</li>
              <li>{animal.breed}</li>
              <li>{animal.age} {animal.age == "1"?'ano':'anos'}</li>
              <li>{animal.gender}</li>
              <li>{animal.owner}</li>
              <li>{animal.description}</li>
              <Link to={{pathname: "/AnimalDetails", state: { animal }}}>Details</Link>
            </div>
          )
        })}
      </ul>
    </div>
  );
};