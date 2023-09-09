import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Cards from './components/Cards'
import './App.css'

function App() {

  let [category, setCategory] = useState("all")

  let [data, setData] = useState([]);
  let getData = async()=>{
    let api = await fetch("https://dummyjson.com/products");
    let apiData = await api.json()
    data = apiData.products
    console.log("async got called ")
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div>
      <Navbar/>
      <Categories setCategory={setCategory} data={data} />
      <Cards data={data} category={category}/>
    </div>
  )
}

export default App
