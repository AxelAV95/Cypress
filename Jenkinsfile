pipeline {
    agent any

    stages {
       stage('Build') {
    steps {
        sh '''
        export TERM=xterm
        cd 01-practica
        npm install
        '''
    }
}

        stage('Test') {
            steps {
                sh 'cd 01-practica && xvfb-run -a npx cypress run'
            }
        }
    }
    post {
        success {
            echo 'Tests passed!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
