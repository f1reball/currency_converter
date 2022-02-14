import { useEffect } from 'react';
import './App.css';

import InputBar from './components/inputbar';

const BASE_URL = 'https://api.exchangeratesapi.io/v1/latest'

function App() {

 useEffect(() => {
   fetch(BASE_URL)
   .then(res => res.json())
   .then(data => console.log(data))
 }, [])

  return (
    <div className="App">
        <InputBar />
    </div>
  );
}

export default App;
