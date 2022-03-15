const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
serverUrl: 'http://localhost:9000/',
login: "admin",
password: "boomtown",
options : { 
'sonar.sources': './src',
"sonar.exclusions": "**/tests/**",
"sonar.tests": "./tests",
"sonar.test.inclusions": "./tests/**/*",
'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
'sonar.testExecutionReportPaths': 'test-report.xml',
'sonar.eslint.reportPaths': 'eslint-report.json',
'sonar.projectKey':'ix-pankajk_ix-terraform-cicd',
'sonar.sources':'',
'sonar.host.url': 'https://8080-cs-543085140216-default.cs-asia-southeast1-yelo.cloudshell.dev',
'sonar.login':'d5b085aefe7f549b999223032c62fcf4f3e56c50'
}
}, () => {});
