import {useState} from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen durattion-200" style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "red"}}>Red</button>
           <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "green"}}>Green</button> 
          <button onClick={() => setColor("blue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("Olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("grey")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "grey"}}>Grey</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "white"}}>White</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor("aqua")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "aqua"}}>Aqua</button>
           <button onClick={() => setColor("yellowgreen")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "yellowgreen"}}>yellowgreen</button>
           <button onClick={() => setColor("#0000F1")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "Blue"}}>Blue</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
