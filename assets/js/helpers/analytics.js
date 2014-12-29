var config = window.config;

// Google Analytics
window.ga('create', config.creds.analytics, window.location.hostname);
window.ga('send', 'pageview');
