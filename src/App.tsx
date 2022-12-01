import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import BoardList from './components/boardList';
// import BoardList2 from "./components/boardList2";
// import Write from './components/write';
import BoardList2 from './components/boardList2';

function App() {
  return(
    <div>
      <div className="App">
        {/* <BoardList></BoardList> */}
        {/* <Write></Write> */}

        <div>
          
          <BoardList2></BoardList2>
        </div>
      </div>
    </div>
  );
}

export default App;