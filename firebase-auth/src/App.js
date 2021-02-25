import React, { useContext } from 'react';
import { firebaseAuth } from './provider/AuthProvider'
import './App.css';

function App () {
  const { test } = useContext(firebaseAuth)
  console.log(test)

  return (
    <div>
      hello
    </div>
  );
}

export default App;
