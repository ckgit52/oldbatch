import { useEffect, useState } from 'react'



function App() {

  const [data,setData]=useState(null);

  const url="https://api.weatherapi.com/v1/current.json?key=685f37ad2c36469d9f1201849233012&q=chandigarh&aqi=no";

  useEffect(()=>{

    fetch(url).
    then(res=>res.json()).
    then(result => setData(result)).
    catch((error)=>console.log(error))
  },url)

  console.log(data)

  return (
    <>
      <div className='flex gap-4 items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-purple-500 to-indigo-500'>
        <div className='flex flex-col items-center gap-6 justify-center '>

          <input className='bg-gray-500 rounded-md outline-none' type='text' value="chd" />

          <div className='bg-yellow-200 rounded-full h-10 w-10 '></div>
          <h1 className='text-3xl font-extrabold text-white'>35degree</h1>

          <p>partly cloudy</p>

          <p>date 27jun  <span>chandigarh</span></p>
          
        </div>
        <div className='grid grid-cols-2 gap-3'>

          <div className=" bg-slate-700 p-6 rounded-md px-10 text-white">
            <p>wind status</p>
            <h1>18.1kmph</h1>
          </div>
          <div className=" bg-slate-700 p-6 rounded-md px-10 text-white">
            <p>Humidity</p>
            <h1>42%</h1>
          </div>
          <div className=" bg-slate-700 p-6 rounded-md px-10 text-white">
            <p>visibility</p>
            <h1>6 miles</h1>
          </div>
          <div className=" bg-slate-700 p-6 rounded-md px-10 text-white">
            <p>Air pressure</p>
            <h1>1091 mb</h1>
          </div>
          
          
        </div>

      </div>

    </>
  )
}

export default App