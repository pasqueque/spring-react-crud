pipeline {
    agent { dockerfile true }
    /*agent {
        docker {
            image 'openjdk:17-slim'
        }
    }*/
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