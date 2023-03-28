import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const DogImage = props => {

    const [image, setImage] = useState()

    useEffect(function loadImageByBreed(){
        if(props.chosenBreed !=undefined){
        axios.get(`https://dog.ceo/api/breed/${props.chosenBreed}/images`)
        .then(result=>{
            setImage(result.data.message[0])
        })
        .catch(error=>console.log(error))
    }
    },[props.chosenBreed])

    return <>
    <h2>Image</h2>
    <img src={image} alt={props.chosenBreed} />


    </>

}

export default DogImage