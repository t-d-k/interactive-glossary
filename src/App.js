import logo from './logo.svg';
import './App.css';
import Concepts from './Concepts';
import Details from './Details';
import { useState } from 'react';
import { getDetailsFromTag } from './Concept';

function App() {
  const [contents, setContents] = useState('')

  function doSelected(tag) {
    
    const dets= getDetailsFromTag(tag);
    setContents(dets);
    // alert(tag)
    // setAnswered(true);
}

  return (
    <div className="App">
      <header className="App-main">
       <Concepts  onSelected={doSelected}></Concepts>
       <Details contents={contents}></Details>
      </header>
    </div>
  );
}



export default App;
