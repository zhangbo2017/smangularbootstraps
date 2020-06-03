pipeline {
  agent any
  environment {
    DOCKERHUBNAME = "920018225"
  }
  stages {
    stage('prepare git file'){
      steps{
        sh '''
          if [ ! -d "/smc/" ];then mkdir /smc fi
          cp /var/jenkins_home/workspace/smcangularservice /smc
          '''
      }
    }
    
    stage('docker build & push image on build docker/build server') {
      steps {
        // docker stop/rm older containers: remove only there are containers found
        script {
          def REMOVE_FLAG = sh(returnStdout: true, script: "docker container ls -aq --filter name=.*smc-angular-app.*") != ""
          echo "REMOVE_FLAG: ${REMOVE_FLAG}"
          if(REMOVE_FLAG){
            // sh 'docker container ls -aq --format {{.ID}} --filter name=smc-angular-app | xargs docker container rm -f'
            // sh 'docker container rm -f $(docker container ls -aq --format {{.ID}} --filter name=.*smc-angular-app.*)'
            sh 'docker container rm -f $(docker container ls -aq --filter name=.*smc-angular-app.*)'
          }
        }
        
        // docker rmi old images before build: remove only there are images found
        script {
          def REMOVE_FLAG = sh(returnStdout: true, script: "docker image ls -q *${DOCKERHUBNAME}/smc-angular-nginx*") != ""
          echo "REMOVE_FLAG: ${REMOVE_FLAG}"
          if(REMOVE_FLAG){
            // sh 'docker image ls --format {{.ID}} *${DOCKERHUBNAME}/smc-angular-nginx* | xargs docker image rm -f'
            // sh 'docker image rm -f $(docker image ls --format {{.ID}} *${DOCKERHUBNAME}/smc-angular-nginx*)'
            sh 'docker image rm -f $(docker image ls -q *${DOCKERHUBNAME}/smc-angular-nginx*)'
          }
        }

        // solution 1: can login successfully, but id/pw will be exposed
        // script {
          // docker.withRegistry(registry-server, Credentials_ID)
          // docker.withRegistry('https://index.docker.io/v1/', 'DockerHub_${DOCKERHUBNAME}') {
          //   def customImage = docker.build("${DOCKERHUBNAME}/smc-angular-nginx:latest", '-f Dockerfile .')
          //   /* Push the image to the docker hub Registry */
          //   customImage.push('latest')
          // }
        // }
        // soution 2: it's good to use without any expose..
        withCredentials([usernamePassword(credentialsId: "DockerHub_${DOCKERHUBNAME}", usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          sh 'docker login -u $USERNAME -p $PASSWORD'
          sh 'docker image build -t ${DOCKERHUBNAME}/smc-angular-nginx:latest .'
          sh 'docker push ${DOCKERHUBNAME}/smc-angular-nginx:latest'
        }
      }
    }

    // the following steps should be running on deploy server which should be different with previous server normally
    // while we use the same server is just for demo purpose
    stage('docker pull image and docker run image on docker/deploy server') {
      steps {
        // docker stop/rm older containers: remove only there are containers found
        script {
          def REMOVE_FLAG = sh(returnStdout: true, script: "docker container ls -aq --filter name=.*smc-angular-app.*") != ""
          echo "REMOVE_FLAG: ${REMOVE_FLAG}"
          if(REMOVE_FLAG){
            // sh 'docker container ls -aq --format {{.ID}} --filter name=smc-angular-app | xargs docker container rm -f'
            // sh 'docker container rm -f $(docker container ls -aq --format {{.ID}} --filter name=.*smc-angular-app.*)'
            sh 'docker container rm -f $(docker container ls -aq --filter name=.*smc-angular-app.*)'
          }
        }

        // docker rmi old images: remove only there are images found
        script {
          def REMOVE_FLAG = sh(returnStdout: true, script: "docker image ls -q *${DOCKERHUBNAME}/smc-angular-nginx*") != ""
          echo "REMOVE_FLAG: ${REMOVE_FLAG}"
          if(REMOVE_FLAG){
            // sh 'docker image ls --format {{.ID}} *${DOCKERHUBNAME}/smc-angular-nginx* | xargs docker image rm -f'
            // sh 'docker image rm -f $(docker image ls --format {{.ID}} *${DOCKERHUBNAME}/smc-angular-nginx*)'
            // sh 'docker image rm -f $(docker image ls -q *${DOCKERHUBNAME}/smc-angular-nginx*)'
          }
        }

        // docker pull image from docker hub registry
        // sh 'docker pull ${DOCKERHUBNAME}/smc-angular-nginx'

        // docker run images
        sh 'docker run -d -p 80:4200 --name smc-angular-app ${DOCKERHUBNAME}/smc-angular-nginx'
      }
    }

    stage('clean workspace') {
      steps {
        // clean workspace after job finished
        cleanWs()
      }
    }
  }
}
