pipeline {
    agent any

    stages {
       
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t docker-portfolio-app .'
                echo 'Image Build are Successfull from Docker File'
            }
        }

        stage('Test the code file present or not') {
            steps {
               echo 'Running basic tests...'

                // Check if index.html exists
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
        
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8081:80 docker-portfolio-app'
            }
        }

    }
}
