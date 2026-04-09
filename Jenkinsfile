pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/AaftabPathan/docker-portfolio-app.git'
              echo'The Clonning The Code Form Github'
              echo 'Code Clone are Successfully Done...!!!'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t portfolio-app .'
                echo 'Image Build are Successfull from Docker File'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 portfolio-app'
            }
        }

    }
}
