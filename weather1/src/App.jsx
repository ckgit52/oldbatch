import { useEffect, useState } from 'react'



function App() {

  const [data,setData]=useState(null);
  const [coord,setCoord]=useState(null)
  const [city,setCity]=useState('chandigarh')
  
  const [lat,setLat]=useState(30.7333)
  const [log,setLog]=useState(76.7794)


  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=013bc85a45c9f1d338c944408df013b0`;
  const latlong=`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=018c3a66aa804172b84f002684f2ca48`

  useEffect(()=>{

    fetch(url).
    then(data=>data.json()).
    then(data => setData(data)).
    catch((error)=>console.log(error))
  },[url,city])

  useEffect(()=>{

    fetch(latlong).
    then(data => data.json()).
    then(data => {
      setCoord(data)
      setLat(data.results[0].geometry.lat)
      setLog(data.results[0].geometry.lng)
    }).
    catch(error => console.log(error))
   
  },[city])


  console.log(data)

  console.log(lat, " ",log);

  



  return (
    <>
      <div className='flex gap-4 items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-purple-500 to-indigo-500'>
       {data &&  <div className='flex flex-col items-center gap-6 justify-center '>

          <input onChange={(e)=>setCity(e.target.value)} className='bg-gray-500 rounded-md outline-none' type='text' value={city} />

          <div className='bg-yellow-200 rounded-full h-10 w-10 '></div>
          <h1 className='text-3xl font-extrabold text-white'>{(data.main.temp-273).toFixed(2)}</h1>

          <p>{data.weather[0].main}.....{data.weather[0].description}</p>

          <p>{data.name}</p>
          
        </div>}
        {data && <div className='grid grid-cols-2 gap-3'>

          <div className=" bg-slate-700 p-6 rounded-md px-10 text-white">
            <p>wind status</p>
            <h1>{data.wind.speed} kmh</h1>
          </div>
          <div className=" bg-slate-700 p-6 rounded-md px-10 text-white">
           <h1>humidity</h1>
            <p>{data.main.humidity}</p>
           
          </div>
          <div className=" bg-slate-700 p-6 rounded-md px-10 text-white">
          <p>Visibility</p>
            <p>{data.visibility}</p>
          </div>
          <div className=" bg-slate-700 p-6 rounded-md px-10 text-white">
            <h1>air pressure</h1>
            <h1>{data.main.pressure}</h1>
          </div>
          
          
        </div>}

      </div>

    </>
  )
}

export default App