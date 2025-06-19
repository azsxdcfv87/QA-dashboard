import React from "react";
import OverviewTable from "./component/OverviewTable";
import UploadTable from "./component/UploadTable";
import MixpanelTable from "./component/MixpanelTable";
import FailTable from "./component/FailTable";
import FeatureTable from "./component/FeatureTable";
import './App.css';

function App() {
  return (
    <div className="App-container">
      <div className="App-content">
        <OverviewTable />
        <FeatureTable />
        <UploadTable />
        <MixpanelTable />
        <FailTable />
      </div>
    </div>
  );
}

export default App;
