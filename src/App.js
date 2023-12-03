import { useState } from 'react';
import Dropdown from './Dropdown';

function App() {
  const [selected, setSelected] = useState("Select")
  return (
    <div className="App">
     <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
