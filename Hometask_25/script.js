function updateWeather(city) {
    // URL для запиту змінюється залежно від введеного користувачем міста
    let weatherApiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=5d066958a60d315387d9492393935c19";

    // Виконуємо запит за допомогою fetch
    fetch(weatherApiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Обробляємо отримані дані
            let cityName = data.name;
            let temperature = data.main.temp;
            let pressure = data.main.pressure;
            let description = data.weather[0].description;
            let humidity = data.main.humidity;
            let windSpeed = data.wind.speed;
            let windDeg = data.wind.deg;
            let iconCode = data.weather[0].icon;

            // Виводимо отримані дані на сторінку
            document.getElementById("city").innerHTML = "місті: " + cityName;
            document.getElementById("temperature").innerHTML = "Температура: " + temperature + "°C";
            document.getElementById("pressure").innerHTML = "Тиск: " + pressure + " hPa";
            document.getElementById("description").innerHTML = "Опис: " + description;
            document.getElementById("humidity").innerHTML = "Вологість: " + humidity + "%";
            document.getElementById("wind").innerHTML = "Швидкість вітру: " + windSpeed + " м/с, Напрям: " + windDeg + "°";
            document.getElementById("icon").src = "http://openweathermap.org/img/w/" + iconCode + ".png";
        })
        .catch(function(error) {
            console.error("Помилка: " + error);
        });
}

// Оновлюємо дані при завантаженні сторінки
updateWeather("Kyiv");

// Оновлюємо дані при натисканні кнопки "Пошук"
document.getElementById("search-button").addEventListener("click", function() {
    let city = document.getElementById("city-input").value;
    if (city) {
        updateWeather(city);
    } else {
        alert("Будь ласка, введіть назву міста.");
    }
});
