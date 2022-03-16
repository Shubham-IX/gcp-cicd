const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
// serverUrl: 'https://8080-cs-543085140216-default.cs-asia-southeast1-yelo.cloudshell.dev',
serverUrl: 'http://localhost:9000',
login: "admin",
password: "Admin@123",
options : { 
'sonar.sources': './src',
}
}, () => {});
