
let weather = {
    "apikey": "27988cfcad0f8d9a54de027695c50edd"
}
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const search = document.getElementById('search')
search.addEventListener('click', () => {
    const city = document.getElementById('cityName').value;
    // console.log('www.api.openweathermap.org/data/2.5/weather?q=' + city + '&appid={API key}')
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + weather.apikey)
        .then(response => {
            if (!response.ok) {
                alert("No weather found.");
                throw new Error("No weather found.");
              }
              return response.json();
        })
        .then(data => {
            // console.log(data.main)
            let datas = data;
            const { name } = datas;
            const { icon, description } = datas.weather[0];
            let { temp, humidity } = datas.main;
            let temp2 =  temp/10;
            const temperature = temp2.toFixed(2);
            const { speed } = datas.wind;
            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".icon").src =
              "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description").innerText = description;
            document.querySelector(".temp").innerText = temperature + "°C";
            document.querySelector(".humidity").innerText =
              "Humidity: " + humidity + "%";
            document.querySelector(".wind").innerText =
              "Wind speed: " + speed + " km/h";
            document.querySelector(".weather").classList.remove("loading");
            document.querySelector(".container").classList.add("length");
            document.body.style.backgroundImage =
              "url('https://source.unsplash.com/1600x900/?" + name + "')";
        });
})
