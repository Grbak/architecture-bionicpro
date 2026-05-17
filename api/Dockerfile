FROM node
WORKDIR /usr/app/api

EXPOSE 8000
COPY ./ ./
RUN npm install
RUN npm run build

CMD ["npm", "start"]