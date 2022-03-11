const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
serverUrl: 'http://localhost:9000',
login: "admin",
password: "boomtown",
options : {
'sonar.sources': './src',
}
}, () => {});
