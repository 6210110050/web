
import './App.css';
import axios from 'axios'

const inc = async() =>{
  let result = await axios.post("localhost:8080",{
  a : +1
  })
   console.log(result)
}

const ref = async() =>{
  let result = await axios.post("localhost:8080",{
    
  })
   console.log(result)
}

function App() {
  return (
    <div>
      <button onClick={inc}>
        increase</button>
      <button onClick={ref}> refresh</button>
      

      
    </div>
  );
}

export default App;
