document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    } else {
        return "N/A";
    }
}

document.getElementById('windChill').textContent = calculateWindChill(10, 5).toFixed(2) + "°C";

/*var lastSpan = document.querySelector('.weath');
var img = document.createElement('img');
img.src = 'images/weather.svg';
img.alt = 'Weather Icon';
img.style.width = '24px';
img.style.height = '24px';
img.style.verticalAlign = 'middle';

lastSpan.appendChild(img);*/