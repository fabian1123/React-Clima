import moment from "moment";

const apiKey = "1d53c9793e9f86241825da7ddbb53ac3";
const apiURL = `http://api.openweathermap.org/data/2.5/forecast?id=3844421&appid=${apiKey}&units=metric&lang=es`;

export function cargarClima(){
    return fetch(apiURL)
        .then(res => res.json())
        .then(res => {
            const data = [];

            for (var i = 0; i < res.list.length; i = i + 8) {
                const clima = res.list[i];
                const datosClima = {};
                
                datosClima.day = moment.unix(clima.dt).format('ddd');
                datosClima.max = clima.main.temp_max;
                datosClima.min = clima.main.temp_min;
                datosClima.icon = `http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`;
                data.push(datosClima);
            }

            return data;
        });

}