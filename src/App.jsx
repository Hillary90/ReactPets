import React from "react";
import "./App.css";

function App() {
  const pets = [
    {
      name: 'Dolly',
      type: 'cat',
      description: 'Dolly is funny and loves to be around people',
      skills: ['fetch', 'play dead', 'roll over'],
      image: 'https://res.cloudinary.com/atapas/image/upload/v1604829788/cats/remi-remino-E9kVmtiqqGE-unsplash_uivwfy.jpg',
    },
    {
      name: 'Molly',
      type: 'cat',
      description: 'Molly is a sweet and cuddly cat stretch a lnpm ot!',
      skills: ['play dead', 'meow', 'purr'],
      image: 'https://res.cloudinary.com/atapas/image/upload/v1604829829/cats/timo-volz-ZlFKIG6dApg-unsplash_x3xifk.jpg',
    },
    {
      name: 'Molly1',
      type: 'cat',
      description: 'Molly1 is a sweet and cuddly cat stretch a lot!',
      skills: ['play dead', 'meow', 'purr'],
      image: 'https://res.cloudinary.com/atapas/image/upload/v1604829829/cats/timo-volz-ZlFKIG6dApg-unsplash_x3xifk.jpg',
    },
  ];
  return (
    <div className="App">
    <h1>My Pets</h1>
    <ul className="container">
    {
      pets.map((pets, index) => (
        <li key={index}>
          <h2>{pets.name}</h2>
          <p>{pets.description}</p>
          <img src={pets.image}
          alt={pets.image}
          width='200px'
          height='200px'
          />
        <ul className="skills">
          {
            pets.skills.map(function (skills, index){
              return <li key={index}>{skills}</li>
            })
          }
        </ul>
        </li>

      ))
    }
    </ul>  
    </div>
  );
}

export default App;