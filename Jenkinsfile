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
                    bat 'docker build -t image .'
                    bat 'docker tag image thanhbinh8223/jenkins:1.0'
                    bat 'docker push thanhbinh8223/jenkins:1.0'
                    bat 'docker run -p 3000:5000 -d thanhbinh8223/jenkins:1.0'
                }
            }
        }
    }
}