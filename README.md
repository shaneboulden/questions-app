# redhat-cyberark-app

This app is designed to showcase the Red Hat/CyberArk partnership, and was used during a DevSecOps webinar. The app is based on the [Patternfly React Seed](https://github.com/patternfly/patternfly-react-seed)

## Development environment

Create a PostgreSQL database on OpenShift, and setup the `project-anvil-api` API and verify it returns results. 

```
oc new-app quay.io/smileyfritz/anvil-api:v0.1.3
```
Create a CNAME record in Route53 for `cybr-demo.blueradish.net` and using the hostname OpenShift routers.

We're using Node Version Manager (NVM) to manage node environments on Fedora:
```sh
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash  
source ~/.bashrc
nvm install v14.15.1
```
Install dependencies and start the application:
```sh
npm install && npm run start:dev
```

## Building a container and deploying to OpenShift

Build the app:
```sh
npm run build
```

Build the container with podman:
```
podman build -t quay.io/smileyfritz/cybr-demo:v1.2 .
```
Push and deploy:
```
oc new-app quay.io/smileyfritz/cybr-demo:v1.2
oc expose svc/anvil-app
```

## Development Scripts
```sh
# Install development/build dependencies
npm install

# Start the development server
npm run start:dev

# Run a production build (outputs to "dist" dir)
npm run build

# Run the test suite
npm run test

# Run the linter
npm run lint

# Run the code formatter
npm run format

# Launch a tool to inspect the bundle size
npm run bundle-profile:analyze

# Start the express server (run a production build first)
npm run start

# Start storybook component explorer
npm run storybook

# Build storybook component explorer as standalone app (outputs to "storybook-static" dir)
npm run build:storybook
```

## Configurations
* [TypeScript Config](./tsconfig.json)
* [Webpack Config](./webpack.common.js)
* [Jest Config](./jest.config.js)
* [Editor Config](./.editorconfig)

## Multi environment configuration
This project uses [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack) for exposing environment variables to your code. Either export them at the system level like `export MY_ENV_VAR=http://dev.myendpoint.com && npm run start:dev` or simply drop a `.env` file in the root that contains your key-value pairs like below:

```sh
ENV_1=http://1.myendpoint.com
ENV_2=http://2.myendpoint.com
```

With that in place, you can use the values in your code like `console.log(process.env.ENV_1);`
