const request = require('request');

const geocodeAddress = (inpAddress, callback) => {

    const apiKey = '';

    request({
        url: `https://maps.google.com/maps/api/geocode/json?address=${inpAddress}&key=${apiKey}`,
        json: true
    }, (error ,response, body) => {
        if (error) {
            callback('Unable to connect to Google servers.')
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        } else {
            console.log('An error has occured');
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;