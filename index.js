if ('serviceWorker' in navigator) {
    console.log("IL SERVICEWORKER C'è");
    navigator.serviceWorker.register("/serviceworker.js");
} else {
    console.warn('service worker non c\'è')
}