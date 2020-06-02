FROM node AS node-builder
WORKDIR /smc
COPY . .
RUN npm install -g nrm
RUN nrm use npmMirror
RUN npm install
RUN npm run build

FROM nginx
COPY --from=node-builder /smc/dist/smc-angular-app /usr/share/nginx/html
