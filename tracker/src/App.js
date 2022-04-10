import "@progress/kendo-theme-material/dist/all.css";
import { TileLayout } from "@progress/kendo-react-layout";
import { useState } from "react";
import "./App.css";

const FirstWidget = () => <div> First Widget</div>;
const SecondWidget = () => <div> Second Widget</div>;

const initPositions = [
  {
    col:1,
    colSpan:2,
    rowSpan:2,
  },
  {
    col:3,
    colSpan:1,
    rowSpan:1,
  },
];

function App() {
  const [positions, setPositions] = useState(initPositions);

  const widgets = [
    {
      header: "First Widget Header",
      body: <FirstWidget />,
    },
    {
      header: "Second Widget Header",
      body: <SecondWidget />,
    },
  ];

  const handleRepositioning = (newPositions) => {
    setPositions(newPositions.value);
  };

  return (
    <div className="App">
      <h1>Resource Dashboard</h1>
      <TileLayout
        className="tile-layout"
        columns = {4}
        rowHeight = {200}
        gap ={{rows:10, columns:10}}
        positions = {positions}
        items = {widgets}
        onRepositioning = {handleRepositioning}
      />
    </div>
  );
  // return <div className="App"></div>;
}

export default App;