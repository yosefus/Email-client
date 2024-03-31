import { Outlet, Route, Routes } from "react-router-dom";
import Badge from "./components/Badge";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <div >
      {/* <div style={{ display: 'flex' , padding: '8px', width: '800px'}}>
        <img src="./vite.svg" alt="" />
        <div style={{background: 'green', flexGrow: 1}} >
          <h3>Jessica Koel</h3>
          <p>hey jhon...</p>
        </div>
        <div style={{ background: 'red'  }} >
          <p>11:34</p>
          <Badge>45</Badge>
        </div>
      </div> */}
      <Routes>
        <Route path="login" element={<h1>login</h1>} />
        <Route element={<MainLayout />}>
          <Route index element={<>home</>} />
          <Route path="messages" element={<><div>messagesLayout</div><Outlet/> </>} >
            <Route path=":messageType" element={<><div> messagesTypeLayout</div><Outlet /></>}>
              <Route path=":emailId" element={<div>id</div> } />
            </Route>
            {/* <Route path="sent"/> */}
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
