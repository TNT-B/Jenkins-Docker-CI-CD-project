pipeline{
    agent any
    stages {
        stage('Git Stage'){
            steps{
                git branch: 'main', url: 'https://github.com/TNT-B/Jenkins-Docker-CI-CD-project.git'
            }
        }
         stage('Build & Push'){
            steps{
                // This step should not normally be used in your script. Consult the inline help for details.
                withDockerRegistry(credentialsId: 'dockerhub', url: 'https://index.docker.io/v1/') {
                    // some block
                    sh 'docker build -t thanhbinh8223/Jenkins-Docker-CI-CD-project:lastest .'
                    sh 'docker push thanhbinh8223/Jenkins-Docker-CI-CD-project:lastest'
                    
                }
            }
        }
    }
}