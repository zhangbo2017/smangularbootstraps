FROM node AS nodebuilder
WORKDIR /smc
COPY . .
RUN npm install -g nrm
RUN nrm use npmMirror
RUN npm install
RUN npm run build

FROM nginx
COPY --from=nodebuilder /smc/dist/smAngularBootstrapS /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./nginx-angular.conf /etc/nginx/conf.d/default.conf
