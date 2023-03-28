# Parent Image
FROM Node:16-alpine as builder
# Working directory in the container
WORKDIR /app
# copy package.json to the next layer in the container
COPY package.json .
# run installation of dependencies
RUN yarn install
# copy all files to the next layer in the container
COPY . .

# Expose Port
EXPOSE 5173

CMD ["yarn", "dev"]