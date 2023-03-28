import React from 'react'
import { useState } from 'react'
import DogBreeds from './DogBreeds.js'
import DogImage from './DogImage.js'


const App = props => {

    const [chosenBreed, setChosenBreed] = useState([])
    
    const handleChooseBreed = (event, breed) => {
        setChosenBreed(breed)
    }

    return <>
    <h1>The World of Dogs</h1>
    <DogImage chosenBreed={chosenBreed}/>
    <DogBreeds chosenBreed={chosenBreed} handleChooseBreed={handleChooseBreed}/>
    </>
}

export default App