import { useEffect, useState } from "react";
import "./App.css";
import { DATA } from "./constants";
import Card from "./components/Card";
import { CardContext } from "./CardContext";

function App() {
  const [personData, setPersonData] = useState([]);

  useEffect(() => {
    setPersonData(DATA);
  }, []);

  return (
    <CardContext.Provider value={{ personData, setPersonData }}>
      <div className="card-container">
        {personData.map((val, idx) => (
          <Card key={`${idx}`} {...val} idx={idx} />
        ))}
      </div>
    </CardContext.Provider>
  );
}

export default App;
