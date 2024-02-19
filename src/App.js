import logo from './logo.svg';
import './App.css';
import Concepts from './Concepts';
import Details from './Details';
import { useState } from 'react';
import { getDetailsFromTag } from './Concept';

/**
 * 
 * @returns component
 */
function App() {
  const [contents, setContents] = useState('The description will appear here')

  /**
   * callback when the selected button is changed
   * @param {string} tag the concept name
   */
  function doSelected(tag) {
    const dets = getDetailsFromTag(tag);
    setContents(dets);
  }

  return (
    <div className="App">
      <h1>Interactive Glossary</h1>
      <header className="App-main">

        <Concepts onSelected={doSelected}></Concepts>
        <Details contents={contents}></Details>
      </header>
    </div>
  );
}



export default App;
