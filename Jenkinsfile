pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t docker-portfolio-app .'
                echo 'Image Build Successful'
            }
        }

        stage('Test File Exists') {
            steps {
                echo 'Running basic tests...'
                sh '''
                if [ ! -f index.html ]; then
                    echo "index.html not found!"
                    exit 1
                else
                    echo "index.html found ✅"
                fi
                '''
            }
        }

        stage('Security Scan') {
            steps {
                sh 'trivy image docker-portfolio-app:latest || true'
            }
        }

        stage('NPM Audit') {
            steps {
                sh 'npm install'
                sh 'npm audit fix || true'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm install eslint'
                sh 'npx eslint .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop docker-portfolio-app || true'
                sh 'docker rm docker-portfolio-app || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8081:80 --name docker-portfolio-app docker-portfolio-app'
            }
        }

        stage('Health Check') {
            steps {
                sh '''
                sleep 5
                response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8081)
                if [ "$response" -eq 200 ]; then
                    echo "Application is UP ✅"
                else
                    echo "Application is DOWN ❌"
                    exit 1
                fi
                '''
            }
        }

        stage('Push to DockerHub') {
            steps {
                echo "Pushing image to DockerHub"
                withCredentials([usernamePassword(
                    credentialsId: "Docker-portfolio-app-Credentials",
                    usernameVariable: "DockerHubUser",
                    passwordVariable: "DockerHubPass"
                )]) {
                    sh '''
                    echo $DockerHubPass | docker login -u $DockerHubUser --password-stdin
                    docker tag docker-portfolio-app:latest $DockerHubUser/docker-portfolio-app:latest
                    docker push $DockerHubUser/docker-portfolio-app:latest
                    '''
                }
            }
        }
    }

    post {
        success {
            emailext (
                subject: "SUCCESS: ${env.JOB_NAME}",
                body: "Build Successful 🎉\nCheck here: ${env.BUILD_URL}",
                to: "aaftabaayubpathan@gmail.com"
            )
        }
        failure {
            emailext (
                subject: "FAILED: ${env.JOB_NAME}",
                body: "Build Failed ❌\nCheck here: ${env.BUILD_URL}",
                to: "aaftabaayubpathan@gmail.com"
            )
        }
    }
}
