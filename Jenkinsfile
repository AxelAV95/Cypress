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
