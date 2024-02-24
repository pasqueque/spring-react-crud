pipeline {
    //agent { dockerfile true }
    agent {
        docker {
            image 'open-17.0.10_7-jre-jammy'
        }
    }
    stages {
        /*stage('Check out') {
            steps {
                git branch: 'master', changelog: false, poll: false, url: env.GITHUB_URL
            }
        }*/
        // Остальная часть остается без изменений
        stage('Build') {
            steps {
                script {
                    //sh 'npm --version'
                    //sh 'node --version'
                    sh './mvnw compile'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh './mvnw test'
                }
            }
        }
        stage('Package') {
            steps {
                script {
                    sh './mvnw package -Dmaven.test.skip'
                }
            }
        }
    }
}