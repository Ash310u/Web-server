const request = require("postman-request");

const forecast = (lat,lon,location,localtime, callback) => {

    const ForecastURL = `http://api.weatherstack.com/current?access_key=f2b10ff7488dc1b55f5a4b7def317801&query=${lat},${lon}&units=m`;

        request({ url: ForecastURL, json: true }, (error, {body}) => {
            
            if (error) {
                console.log(`Unble to connect to weather service!`, undefined);
            } else if (body.error) {
                console.log(`Unble to find location. Try another search`, undefined);
            } else {
                callback(
                    undefined,
                    {
                        feelslike: body.current.feelslike,
                        temperature: body.current.temperature,
                        humidity: body.current.humidity,
                        weatherDescriptions: body.current.weather_descriptions,
                        localtime:body.location.localtime
                    }
                )
            }

        })   


}

module.exports = forecast;