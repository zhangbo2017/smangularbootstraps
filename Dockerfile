FROM node as node-builder
WORKDIR /smc
COPY . .
RUN npm install -g nrm
RUN nrm use npmMirror
RUN npm install
RUN npm run build

FROM nginx
COPY --from=node-builder /smc/dist/ /usr/share/nginx/html
EXPOSE 4200
