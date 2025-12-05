
import './App.css';
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const multipliers = [3, 4, 6, 12];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="KJUh7">
      <h3>Price Change </h3>

      <input className='price' type="number" value={value} placeholder="Enter number" onChange={handleChange} />

      {value &&
        <div>
          <div>2/{multipliers[0]}no. (4inch) - {multipliers[0] * value}</div>
          <div>{multipliers[1]}no. (6inch) - {multipliers[1] * value}</div>
          <div>{multipliers[2]}no. (8inch) - {multipliers[2] * value}</div>
          <div>{multipliers[3]}no. (12inch) - {multipliers[3] * value}</div>



        </div>
      }
    </div>
  );
}

export default App;
