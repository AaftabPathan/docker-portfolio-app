pipeline {
    agent any
    stages {
       
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t docker-portfolio-app .'
                echo 'Image Build are Successfull from Docker File'
            }
        }

        stage('Test the code file present or not') {  //checks if Index.html Is Exists
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
                script {
                    echo 'Checking if application is running...'
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
                to: "your-email@gmail.com"
            )
        }    
    }

}  
