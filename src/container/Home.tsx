import { Link } from "react-router-dom"

function Home() {
  return (
    <div style={{display: "flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "300px"}}>
            <div style={{border: "1px solid", padding: "10px"}}>
                <Link to="/simpleExample">
                    <div>Simple Example</div>
                </Link>
            </div>
            <div style={{border: "1px solid", padding: "10px"}}>
                <Link to="/todoapp">
                    <div>Todo Example</div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home