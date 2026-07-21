FROM mcr.microsoft.com/playwright:v1.55.0-jammy

WORKDIR /app

ENV DOCKER=true

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "chrome"]