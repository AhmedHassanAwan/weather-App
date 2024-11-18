const input = document.querySelector("#input");
const btn = document.querySelector("#add");
const div = document.querySelector("#container");


btn.addEventListener("click",()=>{
    const value = input.value

    fetch(`https://api.weatherapi.com/v1/current.json?key=52bfd4288adf4cf69b1174342241811&q=${value}&aqi=no`)
    
    .then((res)=>{
        return res.json() 
       .then((res)=> {
    console.log(res)
    // .then((res)=>console.log(res))
    div.innerHTML = `
      <div id="card">
      
      <h1>${res.location.country}</h1>
      <h1>${res.location.name}</h1>
      <h1>${res.current.feelslike_c} C </h1>
      <h1>${res.location.localtime}</h1><br>
      <p>Humidity ${res.current.humidity}%</p>    <p>Wind Speed ${res.current.wind_kph}%</p>    
           
      


      </div>
      `
    
    // .catch((err)=> console.log(err))
})
    
})
})

