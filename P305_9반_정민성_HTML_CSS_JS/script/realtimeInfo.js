/**
 * realtimeInfo.js (PDF 263페이지 - 모듈 분리: 화면 및 이벤트 담당)
 * weatherAPI.js로부터 fetchWeatherData를 import하여 도시 선택 이벤트와 DOM 업데이트를 처리합니다.
 */

import { fetchWeatherData } from './weatherAPI.js';

document.addEventListener('DOMContentLoaded', () => {
    const citySelect = document.getElementById('citySelect');
    const weatherBox = document.getElementById('weather-box');

    if (!citySelect || !weatherBox) return;

    citySelect.addEventListener('change', async () => {
        const selectedOption = citySelect.options[citySelect.selectedIndex];
        const cityName = selectedOption.text;
        const lat = selectedOption.getAttribute('data-lat');
        const lon = selectedOption.getAttribute('data-lon');

        if (!lat || !lon) {
            weatherBox.innerHTML = `<p class="placeholder-text">도시를 선택하면 실시간 날씨 정보가 표시됩니다.</p>`;
            return;
        }

        // 1. 로딩 상태 표시 (PDF 262페이지: "로딩중… ⏳")
        weatherBox.innerHTML = `
            <div class="weather-info loading">
                <p>📍 <strong>선택 도시:</strong> ${cityName}</p>
                <p>🌐 <strong>좌표:</strong> 위도 ${lat}° N / 경도 ${lon}° E</p>
                <p class="loading-msg">날씨 정보 로딩중… ⏳</p>
            </div>
        `;

        try {
            // 2. 비동기 날씨 데이터 요청 (Open-Meteo API)
            const weatherData = await fetchWeatherData(lat, lon);
            const current = weatherData.current;
            const temp = current.temperature_2m;
            const humidity = current.relative_humidity_2m;

            // 3. 결과 DOM 업데이트 (PDF 261페이지 & 262페이지: 실시간 온도 및 습도)
            weatherBox.innerHTML = `
                <div class="weather-info success">
                    <p class="city-title">📍 <strong>${cityName}</strong></p>
                    <p class="coords">🌐 위도 ${lat}° N / 경도 ${lon}° E</p>
                    <hr class="weather-divider">
                    <p class="temp">🌡️ <strong>기온:</strong> <span class="highlight-temp">${temp} °C</span></p>
                    <p class="humidity">💧 <strong>상대습도:</strong> ${humidity} %</p>
                    <p class="update-time"><small>🕒 업데이트: ${new Date().toLocaleTimeString()}</small></p>
                </div>
            `;
        } catch (error) {
            weatherBox.innerHTML = `
                <div class="weather-info error">
                    <p>📍 <strong>${cityName}</strong></p>
                    <p class="error-msg">⚠️ 날씨 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</p>
                </div>
            `;
        }
    });
});
