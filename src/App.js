import React from 'react';
import Header from './components/Header';

import Liked from './pages/Liked';
import SwipePage from './pages/SwipePage';

import {Routes, Route} from 'react-router-dom'

import dogs from './data/data'

function App() {

  const [dogData, setDogData] = React.useState(dogs);

  const [displayIcon, setDisplayIcon] = React.useState(false)

  console.table(dogData)

  const [dogIndex, setDogIndex] = React.useState(0);

  function decisionButton (id, like) {
    setDisplayIcon(true)
    setTimeout(() => {
      setDogIndex(prevIndex => prevIndex + 1) 
      setDisplayIcon(false)
    }, 500)
    const updatedDogData = dogData.map(dog => {
      if(dog.id === id){
        return {
          ...dog,
          hasBeenSwiped: true,
          hasBeenLiked: like,
        }
      }
      return dog
    })

    setDogData(updatedDogData)
  }


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<SwipePage img={dogData[dogIndex].avatar} name={dogData[dogIndex].name} age={dogData[dogIndex].age} bio={dogData[dogIndex].bio} id={dogData[dogIndex].id} decisionButton={decisionButton} displayIcon={displayIcon}/>} />
        <Route path="/liked" element={<Liked data={dogData}/>} />
      </Routes>
    </div>
  );
}

export default App;
