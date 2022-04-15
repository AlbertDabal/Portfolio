
FROM node:16-alpine as build

ENV NODE_ENV production
# Add a work directory
WORKDIR /

# Cache and Install dependencies
# COPY package*.json ./
# COPY tsconfig*.json ./
# RUN npm install --production && npm install typescript -g && npm i --save-dev @types/styled-components
# # Copy app files
# COPY . .
# RUN tsc
# # Build the app
# RUN npm run build

#Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
# Copy built assets from builder
COPY build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 3001
# Start nginx
CMD ["nginx", "-g", "daemon off;"]

