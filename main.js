console.log('Hello World!');

const bgv = document.querySelector('#bgv');

document.querySelector('body').onscroll = function() {

   /*if (document.documentElement.scrollTop > 100) {
      document.body.style.background ='#000000D9';
      document.body.style.transition ='1s ease';
      bgVideo.style.opacity = '0';
      document.querySelector('#cityname').style.fontSize = '1.9rem';
      document.querySelector('#cityname').style.borderBottom = '1px solid white';
      document.querySelector('#cityname').style.background = 'black';
      // console.log('its working');
   }*/
   if (document.documentElement.scrollTop > 60) {
      document.querySelector('#cityname').style.fontSize = '2rem';
   }
   
   if (document.documentElement.scrollTop > 100){
      document.body.style.background = 'black';
      document.querySelector('#cityname').style.fontSize = '1.5rem';
      document.querySelector('#cityname').style.borderBottom = '1px solid darkgrey';
      document.querySelector('#cityname').style.background = 'black';
      bgVideo.style.opacity = '0';

      // console.log('its working');
   }else{
      document.body.style.background = 'black';
      bgVideo.style.opacity = '1';
      document.querySelector('#cityname').style.fontSize = '2.3rem';
      document.querySelector('#cityname').style.borderBottom = 'none';
      document.querySelector('#cityname').style.background = 'none';
      // console.log('its not working');
   }

};


const form = document.querySelector('form');
const search = document.querySelector('#search');
const cityname = document.querySelector('#cityname');
const loading = document.querySelector('#loading');
const weather = document.querySelector('#weather');

const getweather = async (city) => {
   loading.innerHTML = `<h5 id=loadingscreen><img src='images/Loading.gif'></h5>`;
   document.getElementById('greyloading').style.display = 'block'
    
   const url = `https://api.weatherapi.com/v1/forecast.json?key=7cb6833c4e99438b85640059221412&q=${search.value}&days=7`;
   const response = await fetch(url);
   const data = await response.json();
   return showWeather(data);
}

const showWeather = (data) => {
   console.log(data);
  
  
 setTimeout(()=>{
 loading.innerHTML = '';
 document.getElementById('greyloading').style.display = 'none';},1000)
 

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

const M = new Date(`${data.location.localtime}`);
let month = months[M.getMonth()];

const d = new Date(`${data.location.localtime}`);
let day = d.getDate();

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const W = new Date(`${data.location.localtime}`);
let week = weeks[W.getDay()]; 
 
const FW = new Date(`${data.forecast.forecastday[2].date}`)
 let Fweek = weeks[FW.getDay()];



if (`${data.current.condition.text}` == 'Mist') {
   bgv.innerHTML = `<video autoplay muted loop id="bgVideo">
             <source src="/bgvideos/Mist_sky.mp4">
            Your browser does not support HTML5 video.
         </video>`;

} else if (`${data.current.condition.text}` == 'Sunny' || `${data.current.condition.text}` == 'Clear') {
   bgv.innerHTML = `<video autoplay muted loop id="bgVideo">
                <source src="/bgvideos/Sunny_sky.mp4">
               Your browser does not support HTML5 video.
            </video>`;

} else if (`${data.current.condition.text}` == 'Cloudy') {
   bgv.innerHTML = `<video autoplay muted loop id="bgVideo">
                <source src="/bgvideos/Cloudy_sky.mp4">
               Your browser does not support HTML5 video.
            </video>`;

} else if (`${data.current.condition.text}` == 'Partly cloudy' || `${data.current.condition.text}` == 'Overcast') {
   bgv.innerHTML = `<video autoplay muted loop id="bgVideo">
                   <source src="/bgvideos/Partly_cloudy.mp4">
                  Your browser does not support HTML5 video.
               </video>`;

} else if (`${data.current.condition.text}` == 'Rainy' || `${data.current.condition.text}` == 'Storm' || `${data.current.condition.text}` == 'Heavy rain' || `${data.current.condition.text}` =='Light rain shower') {
   bgv.innerHTML = `<video autoplay muted loop id="bgVideo">
                   <source src="/bgvideos/Rainy_sky.mp4">
                  Your browser does not support HTML5 video.
               </video>`;

} else if (`${data.current.condition.text}` == 'Snow' || `${data.current.condition.text}` == 'Light snow' || `${data.current.condition.text}` == 'Heavy rain') {
   bgv.innerHTML = `<video autoplay muted loop id="bgVideo">
                   <source src="/bgvideos/Snow_dog.mp4">
                  Your browser does not support HTML5 video.
               </video>`;

}
 
   cityname.innerHTML = `${data.location.name}`;
   weather.innerHTML = `
   <div id='maintemp'>
   <div id='main1'>
   <div id='temp_c'>${data.current.temp_c}</div>
   </div>
   
   <div id='main2'>
   
   <div id='symbol1'>&#8451;</div>
   <div id='weathertype'>${data.current.condition.text}</div>
   </div>
   </div>

   <div id='date'>
   <span>${month}</span>
   <span>${day}</span>
   <span>${week}</span>
   <span>${parseInt(data.forecast.forecastday[0].day.maxtemp_c)}&#8451;/${parseInt(data.forecast.forecastday[0].day.mintemp_c)}&#8451;</span>
   </div>
   
   
   <div class='hourbox'>
   
   <span class='hours'>
   <span>00:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[0].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[0].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>01:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[1].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[1].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>02:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[2].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[2].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>03:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[3].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[3].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>04:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[4].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[4].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>05:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[5].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[5].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>06:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[6].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[6].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>07:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[7].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[7].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>08:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[8].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[8].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>09:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[9].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[9].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>10:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[10].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[10].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>11:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[11].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[11].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>12:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[12].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[12].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>13:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[13].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[13].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>14:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[14].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[14].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>15:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[15].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[15].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>16:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[16].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[16].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>17:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[17].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[17].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>18:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[18].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[18].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>19:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[19].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[19].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>20:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[20].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[20].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>21:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[21].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[21].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>22:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[22].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[22].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>23:00</span>
   <span><img src='${data.forecast.forecastday[0].hour[23].condition.icon}'></span>
   <span>${parseInt(data.forecast.forecastday[0].hour[23].temp_c)}&#8451;</span>
   </span>
   
   </div>
   
   
   
   <div class='forecast1'>
   <span class='forecastdata'>
   <span>Today</span>
   <span>Tommorow</span>
   <span>${Fweek}</span>
   </span>
   
   <span class='forecastdata'>
   <span><img src='${data.forecast.forecastday[0].day.condition.icon}'></span>
   <span><img src='${data.forecast.forecastday[1].day.condition.icon}'></span>
   <span><img src='${data.forecast.forecastday[2].day.condition.icon}'></span>
   </span>
   
   <span class='forecastdata'>
   <span>${data.forecast.forecastday[0].day.condition.text}</span>
   <span>${data.forecast.forecastday[1].day.condition.text}</span>
   <span>${data.forecast.forecastday[2].day.condition.text}</span>
   </span>
   
   
   
   <span class='forecastdata'>
   <span>${parseInt(data.forecast.forecastday[0].day.maxtemp_c)}&#8451;/${parseInt(data.forecast.forecastday[0].day.mintemp_c)}&#8451;</span>
   <span>${parseInt(data.forecast.forecastday[0].day.maxtemp_c)}&#8451;/${parseInt(data.forecast.forecastday[1].day.mintemp_c)}&#8451;</span>
   <span>${parseInt(data.forecast.forecastday[0].day.maxtemp_c)}&#8451;/${parseInt(data.forecast.forecastday[2].day.mintemp_c)}&#8451;</span>
   </span>
   
   </div>
   
   <div id='more'>More Detaills</div>   

   <div id='moreweather'>
   
   <div class='moreW'>
   <span>Feels like</span>
   <span>${parseInt(data.current.feelslike_c)}&#8451;</span>
   </div>
   
   <div class='moreW'>
   <span>Humidity</span>
   <span>${data.current.humidity}</span>
   </div>
   
   <div class='moreW'>
   <span>${data.current.wind_dir} wind</span>
   <span>${data.current.wind_kph} km/h</span>
   </div>
   
   <div class='moreW'>
   <span>UV</span>
   <span>${data.current.uv}</span>
   </div>
   
   <div class='moreW'>
   <span>Visibility</span>
   <span>${data.current.vis_km} km</span>
   </div>
   
   <div class='moreW'>
   <span>Air pressure</span>
   <span>${data.current.pressure_mb} hPa</span>
   </div>
   
   <div class='moreW'>
   <span>Chances of rain</span>
   <span>${data.forecast.forecastday[0].day.daily_chance_of_rain}%</span>
   </div>
   
   <div class='moreW'>
   <span>Chances of snow</span>
   <span>${data.forecast.forecastday[0].day.daily_chance_of_snow}%</span>
   </div>
   
   <div class='moreW'>
   <span>Gust</span>
   <span>${data.current.gust_kph} km/h</span>
   </div>
   
   <div class='moreW'>
   <span>Precip</span>
   <span>${data.forecast.forecastday[0].day.totalprecip_mm}mm</span>
   </div>
   
   </div>
   <div id='countryDetaills'>
   <div>${data.location.country} 
   </div>
   <div>
   <img src="https://flagcdn.com/20x15/${data.location.country.slice(0,2).toLowerCase()}.png">
   </div>
   <div>${data.forecast.forecastday[0].date}</div>
   <div class='rice_set'><span>sunrice: ${data.forecast.forecastday[0].astro.sunrise}/</span><span>sunset: ${data.forecast.forecastday[0].astro.sunset} </span></div>
   <div class='rice_set'><span>moonrice: ${data.forecast.forecastday[0].astro.moonrise}/</span><span>moonset: ${data.forecast.forecastday[0].astro.moonset} </span></div>
   
   </div>
   
   `;
   
   
   
  
if (`${data.current.condition.text}`.length > 8) {
   document.getElementById('weathertype').style.fontSize = '1.4rem';
}







}

form.addEventListener('submit', function(event) {
   
   
   event.preventDefault();
   getweather();

   /*document.querySelector('.autocompleteItem').style.display = 'none';
   document.querySelector('.citylist').style.display = 'none';
   document.getElementById('citynameinfo').innerText = form.input.value;
   document.getElementById('citynameinfo').style.fontSize = '1.5rem';
   document.getElementById('citynameinfo').style.color = '#757575';
   document.getElementById('citynameinfo').style.border = '2px solid #757575C9';
   document.getElementById('citynameinfo').style.borderRadius = '20px';
   document.getElementById('citynameinfo').style.margin = '10px 0 0 0';*/
   
})

const getweatherP = async (cityP) => {
   loading.innerHTML = `<h5 id=loadingscreen><img src='/images /Loading.gif'></h5>`;
   document.getElementById('greyloading').style.display = 'block'
    
   const urlP = `https://api.weatherapi.com/v1/forecast.json?key=7cb6833c4e99438b85640059221412&q=mumbai&days=7`;
   const responseP = await fetch(urlP);
   const dataP = await responseP.json();
   return showWeatherP(dataP);
}

const showWeatherP = (dataP) => {
   console.log(dataP);
   
 loading.innerHTML = '';
 document.getElementById('greyloading').style.display = 'none'
 

const monthsP = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

const MP = new Date(`${dataP.location.localtime}`);
let monthP = monthsP[MP.getMonth()];

const dP = new Date(`${dataP.location.localtime}`);
let dayP = dP.getDate();

const weeksP = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WP = new Date(`${dataP.location.localtime}`);
let weekP = weeksP[WP.getDay()]; 
 
const FWP = new Date(`${dataP.forecast.forecastday[2].date}`)
 let FweekP = weeksP[FWP.getDay()];
 
 

if (`${dataP.current.condition.text}` == 'Mist') {
   bgv.innerHTML = `<video autoplay muted loop id="bgVideo">
             <source src="/bgvideos/Mist_sky.mp4">
            Your browser does not support HTML5 video.
         </video>`;
   
}else if (`${dataP.current.condition.text}` == 'Sunny' || `${dataP.current.condition.text}` == 'Clear') {
   bgv.innerHTML = `<video autoplay muted loop id="bgVideo">
                <source src="/bgvideos/Sunny_sky.mp4">
               Your browser does not support HTML5 video.
            </video>`;
   
}else if (`${dataP.current.condition.text}` == 'Cloudy') {
   bgv.innerHTML = `<video autoplay muted loop id="bgVideo">
                <source src="/bgvideos/Cloudy_sky.mp4">
               Your browser does not support HTML5 video.
            </video>`;
   
}else if (`${dataP.current.condition.text}` == 'Partly cloudy' || `${dataP.current.condition.text}` == 'Overcast') {
   bgv.innerHTML = `<video autoplay muted loop id="bgVideo">
                   <source src="/bgvideos/Partly_cloudy.mp4">
                  Your browser does not support HTML5 video.
               </video>`;
   
}else if (`${dataP.current.condition.text}` == 'Rainy' || `${dataP.current.condition.text}` == 'Storm' || `${dataP.current.condition.text}` == 'Heavy rain') {
   bgv.innerHTML = `<video autoplay muted loop id="bgVideo">
                   <source src="/bgvideos/Cloudy_sky.mp4">
                  Your browser does not support HTML5 video.
               </video>`;
   
} else if (`${data.current.condition.text}` == 'Snow' || `${data.current.condition.text}` == 'Light snow' || `${data.current.condition.text}` == 'Heavy rain') {
   bgv.innerHTML = `<video autoplay muted loop id="bgVideo">
                   <source src="/bgvideos/Snow_dog.mp4">
                  Your browser does not support HTML5 video.
               </video>`;

}
 
   cityname.innerHTML = `${dataP.location.name}`;
   weather.innerHTML = `
   <div id='maintemp'>
   <div id='main1'>
   <div id='temp_c'>${dataP.current.temp_c}</div>
   </div>
   
   <div id='main2'>
   
   <div id='symbol1'>&#8451;</div>
   <div id='weathertype'>${dataP.current.condition.text}</div>
   </div>
   </div>

   <div id='date'>
   <span>${monthP}</span>
   <span>${dayP}</span>
   <span>${weekP}</span>
   <span>${parseInt(dataP.forecast.forecastday[0].day.maxtemp_c)}&#8451;/${parseInt(dataP.forecast.forecastday[0].day.mintemp_c)}&#8451;</span>
   </div>
   
   
   <div class='hourbox'>
   
   <span class='hours'>
   <span>00:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[0].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[0].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>01:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[1].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[1].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>02:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[2].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[2].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>03:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[3].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[3].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>04:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[4].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[4].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>05:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[5].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[5].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>06:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[6].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[6].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>07:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[7].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[7].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>08:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[8].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[8].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>09:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[9].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[9].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>10:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[10].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[10].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>11:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[11].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[11].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>12:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[12].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[12].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>13:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[13].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[13].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>14:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[14].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[14].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>15:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[15].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[15].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>16:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[16].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[16].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>17:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[17].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[17].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>18:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[18].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[18].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>19:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[19].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[19].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>20:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[20].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[20].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>21:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[21].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[21].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>22:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[22].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[22].temp_c)}&#8451;</span>
   </span>
   
   <span class='hours'>
   <span>23:00</span>
   <span><img src='${dataP.forecast.forecastday[0].hour[23].condition.icon}'></span>
   <span>${parseInt(dataP.forecast.forecastday[0].hour[23].temp_c)}&#8451;</span>
   </span>
   
   </div>
   
   
   
   <div class='forecast1'>
   <span class='forecastdata'>
   <span>Today</span>
   <span>Tommorow</span>
   <span>${FweekP}</span>
   </span>
   
   <span class='forecastdata'>
   <span><img src='${dataP.forecast.forecastday[0].day.condition.icon}'></span>
   <span><img src='${dataP.forecast.forecastday[1].day.condition.icon}'></span>
   <span><img src='${dataP.forecast.forecastday[2].day.condition.icon}'></span>
   </span>
   
   <span class='forecastdata'>
   <span>${dataP.forecast.forecastday[0].day.condition.text}</span>
   <span>${dataP.forecast.forecastday[1].day.condition.text}</span>
   <span>${dataP.forecast.forecastday[2].day.condition.text}</span>
   </span>
   
   
   
   <span class='forecastdata'>
   <span>${parseInt(dataP.forecast.forecastday[0].day.maxtemp_c)}&#8451;/${parseInt(dataP.forecast.forecastday[0].day.mintemp_c)}&#8451;</span>
   <span>${parseInt(dataP.forecast.forecastday[0].day.maxtemp_c)}&#8451;/${parseInt(dataP.forecast.forecastday[1].day.mintemp_c)}&#8451;</span>
   <span>${parseInt(dataP.forecast.forecastday[0].day.maxtemp_c)}&#8451;/${parseInt(dataP.forecast.forecastday[2].day.mintemp_c)}&#8451;</span>
   </span>
   
   </div>
   
   <div id='more'>More Detaills</div>   

   <div id='moreweather'>
   
   <div class='moreW'>
   <span>Feels like</span>
   <span>${parseInt(dataP.current.feelslike_c)}&#8451;</span>
   </div>
   
   <div class='moreW'>
   <span>Humidity</span>
   <span>${dataP.current.humidity}</span>
   </div>
   
   <div class='moreW'>
   <span>${dataP.current.wind_dir} wind</span>
   <span>${dataP.current.wind_kph} km/h</span>
   </div>
   
   <div class='moreW'>
   <span>UV</span>
   <span>${dataP.current.uv}</span>
   </div>
   
   <div class='moreW'>
   <span>Visibility</span>
   <span>${dataP.current.vis_km} km</span>
   </div>
   
   <div class='moreW'>
   <span>Air pressure</span>
   <span>${dataP.current.pressure_mb} hPa</span>
   </div>
   
   <div class='moreW'>
   <span>Chances of rain</span>
   <span>${dataP.forecast.forecastday[0].day.daily_chance_of_rain}%</span>
   </div>
   
   <div class='moreW'>
   <span>Chances of snow</span>
   <span>${dataP.forecast.forecastday[0].day.daily_chance_of_snow}%</span>
   </div>
   
   <div class='moreW'>
   <span>Gust</span>
   <span>${dataP.current.gust_kph} km/h</span>
   </div>
   
   <div class='moreW'>
   <span>Precip</span>
   <span>${dataP.forecast.forecastday[0].day.totalprecip_mm}mm</span>
   </div>
   
   </div>
   <div id='countryDetaills'>
   <div>${dataP.location.country} 
   </div>
   <div>
   <img src="https://flagcdn.com/20x15/${dataP.location.country.slice(0,2).toLowerCase()}.png">
   </div>
   <div>${dataP.forecast.forecastday[0].date}</div>
   <div class='rice_set'><span>sunrice: ${dataP.forecast.forecastday[0].astro.sunrise}/</span><span>sunset: ${dataP.forecast.forecastday[0].astro.sunset} </span></div>
   <div class='rice_set'><span>moonrice: ${dataP.forecast.forecastday[0].astro.moonrise}/</span><span>moonset: ${dataP.forecast.forecastday[0].astro.moonset} </span></div>
   
   </div>
   
   `;
   
   
   
  
if (`${dataP.current.condition.text}`.length > 8) {
   document.getElementById('weathertype').style.fontSize = '1.4rem';
}





}

document.addEventListener('DOMContentLoaded', ()=>{
   getweatherP();
})
