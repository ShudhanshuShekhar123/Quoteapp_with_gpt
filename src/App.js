import styled from 'styled-components';

import React, { useState } from 'react';

function App() {
  const [joke, setJoke] = useState(null);
  const[content, setcontent] = useState("")
  const [flag,setflag] = useState("")


  const generateJoke = async () => {

  if(content.length === 0){
    alert("Enter the type of quote you want")
  }else{

  

    setflag(false)
    try {
      const response = await fetch('https://chatbot-gpt-59pb.onrender.com/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type
        },
        body: JSON.stringify({ prompt: content }), // Convert data to JSON format
      });
      const data = await response.json();
     
      setflag(true)
      setJoke(data.generatedText);
      setcontent("")
     
   
      console.log(data.generatedText)
    } catch (error) {
      console.error('Error fetching joke:', error);
    }

  }
  };

  console.log(content)
  return (
   <div className='body'>
    <DIV className="joke-container">
      <h1>QUOTES </h1>
      <input onChange={(e)=> setcontent(e.target.value)}  value={content} type="text" placeholder="Enter type of QUOTE you want" />
      <button onClick={generateJoke}>Get Quote</button>

      {
         (flag === false && joke == null) ||   (flag === false)  ? <h3>Getting the Quote for you...</h3>
          :
      <div className="joke">{joke}</div>

}
    </DIV>
    </div>
  );
}



export default App;

const DIV = styled.div`


background-color: rgb(241, 238, 234);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding:0px 100px;

/* .joke-container { */
  text-align: center;
 
  width: 40%;
  /* border:3px solid red; */
  border-radius: 15px;
  margin: auto;
  display: flex;
  padding-top: 70px;
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center horizontally */
  margin-top: 60px;
/* } */

input {
  width: 60%;
  /* padding: 10px; */
  margin: 10px 0;
  padding:15px 10px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
}

button {
  background-color:rgb(18, 135, 96);
  color: #fff;
  border: none;
  padding: 15px 35px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: rgb(18, 200, 96);
}

.joke {
  margin-top: 50px;
  font-size: 1.2rem;
  line-height: 30px;
  color:rgb(18, 135, 96);
  font-size: 28px;
  font-weight: 600;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-style:italic;
}




`