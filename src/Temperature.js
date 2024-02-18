import { useState } from 'react';
import TemperatureInput from "./components/TemperatureInput";

const App = () => {

  const [value, setValue] = useState("0");

  const handleChange = (e) => {
    setValue(e);
  }

  return (
    <>
      <TemperatureInput value={value} onChangeValue={handleChange}></TemperatureInput>
      <TemperatureInput value={value} onChangeValue={handleChange}></TemperatureInput>
    </>
  );
}

export default App