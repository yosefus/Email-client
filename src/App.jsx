import Badge from "./components/Badge";

export default function App() {
  return (
    <div >
      <div style={{ display: 'flex' , padding: '8px', width: '800px'}}>
        <img src="./vite.svg" alt="" />
        <div style={{background: 'green', flexGrow: 1}} >
          <h3>Jessica Koel</h3>
          <p>hey jhon...</p>
        </div>
        <div style={{ background: 'red'  }} >
          <p>11:34</p>
          <Badge>45</Badge>
        </div>
      </div>
    </div>
  )
}
