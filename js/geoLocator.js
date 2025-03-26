var elMap = document.getElementById('loc');
var msg = 'Sorry, we were unable to get your location.';

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
    elMap.textContent = 'Retrieving location...';
} else {
    elMap.textContent = msg;
}

function success(position) {
    msg = `
        <h3>Longitude:</h3> ${position.coords.longitude}
        <h3>Latitude:</h3> ${position.coords.latitude}
    `;
    elMap.innerHTML = msg;
}

function fail(error) {
    elMap.textContent = `Error: ${msg}`;
    console.log(`Error Code: ${error.code}, Message: ${error.message}`);
}
