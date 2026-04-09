pipeline {
    agent any

    stages {
       
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t docker-portfolio-app .'
                echo 'Image Build are Successfull from Docker File'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8081:80 docker-portfolio-app'
            }
        }

    }
}
