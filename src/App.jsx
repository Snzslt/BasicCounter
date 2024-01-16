import { useState } from 'react';
import configureCounter from './components/Counter/ConfigureCounter.jsx';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount){
    setChosenCount(newCount);
  }

 

  return (
    <>
      <Header />
      <main>
       <configureCounter onSet={handleSetCount}/>
        <Counter key={chosenCount} initialCount={chosenCount}/>
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
