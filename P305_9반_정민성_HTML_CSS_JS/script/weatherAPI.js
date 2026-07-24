/**
 * weatherAPI.js (PDF 263페이지 - 모듈 분리: 데이터 담당)
 * Open-Meteo API를 통해 선택한 위도/경도의 실시간 날씨 데이터를 비동기(fetch)로 가져옵니다.
 */

export async function fetchWeatherData(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`날씨 데이터를 불러오는데 실패했습니다. (상태 코드: ${response.status})`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("날씨 API 연동 오류:", error);
        throw error;
    }
}
