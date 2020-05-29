FROM node as node-builder
WORKDIR /smc
COPY . .
RUN npm install -g nrm
RUN nrm use npmMirror
RUN npm install
RUN npm run build

FROM nginx
COPY --from=node-builder /smc/dist/smc-angular-bootstrap /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./nginx-angular.conf /etc/nginx/conf.d/default.conf
EXPOSE 80