import { Routes, Route } from "react-router-dom";
import BoardList from "./component/board/BoardList";
import Regist from "./component/board/Regist";
import View from "./component/board/View";
import Edit from "./component/board/Edit";
import Reply from "./component/board/Reply";

function App() {
  return (
    <Routes>
      <Route path="/board/list" element={<BoardList />} />
      <Route path="/board/regist" element={<Regist />} />
      <Route path="/board/view" element={<View />} />
      <Route path="/board/edit" element={<Edit />} />
      <Route path="/board/reply" element={<Reply />} />
    </Routes>
  );
}

export default App;
