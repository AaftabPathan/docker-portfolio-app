pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/AaftabPathan/docker-portfolio-app.git'
              sh 'The Clonning The Code Form Github'
              sh 'Code Clone are Successfully Done...!!!'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t portfolio-app .'
                sh 'Image Build are Successfull from Docker File'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 portfolio-app'
            }
        }

    }
}
