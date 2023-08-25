const request = require("postman-request");

const geocode = (address, callback) => {
    const GeocodeURL = `https://us1.locationiq.com/v1/search?key=pk.bbb941e8068fd9d57e6f8705a6c4d8ec&format=json&q=${encodeURIComponent(address)}&limit=1`;

    request({ url: GeocodeURL, json: true }, (error, {body}) => {
        if (error) {
            callback(`Unble to connect to weather service!`, undefined);
        } else if (body.error) {
            callback(`Unble to find location. Try another search`, undefined);
        } else {
            callback(
                undefined,
                {
                    location: body[0].display_name,
                    lat: body[0].lat,
                    lon: body[0].lon
                }
            )
        }
    })
}


module.exports = geocode;
