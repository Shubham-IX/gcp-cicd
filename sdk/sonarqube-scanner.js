const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
serverUrl: 'http://35.247.157.99/projects/create',
login: "admin",
password: "PWj4DI3hTeKM",
options : { 
'sonar.sources': './src',
"sonar.exclusions": "**/tests/**",
"sonar.tests": "./tests",
"sonar.test.inclusions": "./tests/**/*",
'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
'sonar.testExecutionReportPaths': 'test-report.xml',
'sonar.eslint.reportPaths': 'eslint-report.json'
}
}, () => {});
