import React, { useState } from 'react';


const PersonCard = (props) => { 
    const {firstName, lastName, hairColor} = props
    
    const [age, setAge] = useState(props.age)

    const addAge = () =>{
        setAge(age + 1)
    }

    return(
        <div>
            <h1 style={{color:"red"}}>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={addAge}>Birhtday button for {lastName} {firstName}!</button>
        </div>
    );
}
export default PersonCard;

