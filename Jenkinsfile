pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd 01-practica' 
             //   sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                 sh 'cd /var/jenkins_home/workspace/cypress-testing-job/01-practica'
                 sh 'xvfb-run -a npx cypress run'
            }
        }
    }
    post {
     //   always {
            //junit 'cypress/results/junit/*.xml'
       // }
        success {
            echo 'Tests passed!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
