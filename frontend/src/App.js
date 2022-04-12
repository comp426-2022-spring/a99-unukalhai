import "@progress/kendo-theme-material/dist/all.css";
import { TileLayout } from "@progress/kendo-react-layout";
import { useState } from "react";
import "./App.css";

//These are the widget objects that are displayed in the dashboard
const FirstWidget = () => <div> First Widget</div>;
const SecondWidget = () => <div> Second Widget</div>;

const initPositions = [
  //This is to initalize where the widgets are places when server starts
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
  //This function allows for the widgets to be moved
  const handleRepositioning = (newPositions) => {
    setPositions(newPositions.value);
  };
  //This returns the widgets to be displayed in the dashboard
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
        onReposition = {handleRepositioning}
      />
    </div>
  );
  // return <div className="App"></div>;
}

export default App;