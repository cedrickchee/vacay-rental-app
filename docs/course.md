---
layout: page
title: Fullstack dev with Node, GraphQL & React
permalink: /course/
youtube_id: kuswGIH-Xj8
playlist_id: PLN3n1USn4xlnfJIQBa6bBjjiECnk6zL6s
---

A web development course that teaches you how to build an online marketplace app with Node.JS, GraphQL and React in 1 week.

{% include youtube-player.html id=page.youtube_id playlist_id=page.playlist_id %}

## About this series

There are 62 parts in this series. It covers:

- Introduction - Fullstack Airbnb Clone with GraphQL, React, and React Native
- Part 0 - Tips to be successful in this series
- Part 1 - Setting up the Yarn Workspace, Server, and Website
- Part 2 - Adding React Apollo and React Router
- Part 3 - Coding React Form with Formik and Ant Design
- Part 4 - Form Validation in Formik with Yup
- Part 5 - Sharing Validation code between the React Web App and GraphQL Server
- Part 6 - Simplifying a React form with the Formik Field Component
- Part 7 - Adding a Controller Package to share code between React and React Native
- Part 8 - Calling the Register Mutation
- Part 9 - Generating Typescript Types with Apollo Codegen
- Part 10 - How to put a Yarn Workspace in a Docker Image
- Part 11 - Deploying a Typescript Server to Digital Ocean with Dokku
- Part 12 - Automating Dokku Deployment and Lerna
- Part 13 - Deploying a Typescript Server to Heroku with Docker
- Part 14 - Deploying a React App with Netlify
- Part 15 - Setting up React Native with Expo
- Part 16 - Adding GraphQL and Routing to React Native
- Part 17 - How to use Formik with React Native
- Part 18 - Styling React Native Register Form
- Part 19 - Generating Typescript Types with Apollo CLI
- Part 20 - React Login Page
- Part 21 - React Native Login Screen
- Part 22 - Saving Session Id in React Native with Secure Storage
- Part 23 - Sending Test Emails with Nodemailer
- Part 24 - Forgot Password Form
- Part 25 - Forgot Password Controller
- Part 26 - Change Password
- Part 27 - Generic React Text Component for Confirmation Pages
- Part 28 - Fixing Change Password
- Part 29 - Adding a Listing Database Table
- Part 30 - How to do Database Migrations with TypeORM
- Part 31 - Create Listing Resolver
- Part 32 - GraphQL Resolver Authorization
- Part 33 - GraphQL Middleware
- Part 34 - React Router Authorization
- Part 35 - AuthRoute Questions
- Part 36 - Multi Step Form in React with Formik
- Part 37 - Custom Formik Fields and Fix Typescript Imports
- Part 38 - Create Listing GraphQL Higher Order Component
- Part 39 - Redirect Correctly after Login
- Part 40 - File Upload GraphQL Yoga
- Part 41 - Uploading an Image in React with GraphQL
- Part 42 - Show Listings using Ant Design Cards
- Part 43 - Serve Images using Express
- Part 44 - Fetching the User for each Listing
- Part 45 - Batching and Caching GraphQL Requests with DataLoader
- Part 46 - Clearing Apollo Cache after Login
- Part 47 - Logout in React with GraphQL
- Part 48 - Cookies in React Native
- Part 49 - Create Listing Form in React Native
- Part 50 - Checkbox Group Form Field React Native
- Part 51 - GraphQL Image Uploads in React Native
- Part 52 - Displaying Cards from React Native Elements
- Part 53 - Create and View Messages in GraphQL
- Part 54 - GraphQL Subscriptions with GraphQL Yoga
- Part 55 - Filtering GraphQL Subscriptions
- Part 56 - GraphQL Subscriptions in React with Apollo
- Part 57 - Dynamic React Router Pages with GraphQL
- Part 58 - Refactoring to use React Apollo Query Component
- Part 59 - Fetch Messages with React Apollo Query Component
- Part 60 - Create Messages with React Apollo Mutation Component
- Part 61 - Real Time Messages with React Apollo Subscriptions

## My Notes

### Part 1 - Setting up the Yarn Workspace, Server, and Website

- Getting started
- Using an [example of Yarn workspace repo](https://github.com/benawad/typescript-yarn-workspace-example).
- Go ahead and open terminal. Then, make a directory called `abb`:

  ```sh
  mkdir abb
  cd add
  ```

- Open that folder up on Visual Studio Code:

  ```sh
  code .
  ```

- Setup a `package.json` file. How we are going to be setting this up is a monorepo. This going to be our root directory. In this, we are going to have a `packages` folder that contains our server, react app, and react native app. To initialize this and to basically handle do all these things for a monorepo we're going to be using Yarn workspaces.

  ```javascript
  // package.json
  {
    "private": true,
    "workspaces": ["packages/*"]
  }
  ```

  And make a folder called `packages`. So, this is where we're going to put all our code inside of `packages`.

- Now we just need to add our first package.
- A [GraphQL Server boilerplate made with Typescript, PostgreSQL, and Redis](https://github.com/benawad/graphql-ts-server-boilerplate).

  - So, this is what we are going to use for the server. This is something I've built before and I did a series on this of videos of how I built this. So if you're interested to see how this is built if you're new to this, in this repo, I've a link to that playlist there or I've also have one description below in this repo.
  - Clone this:

    ```sh
    cd packages
    git clone https://github.com/benawad/graphql-ts-server-boilerplate.git server
    ```

- `ormconfig.json`:
  - This thing is how you setup how it connects to the database. We're using a PostgreSQL database and Redis.
  - PostgreSQl for storing data.
  - Redis for sessions and kind of caching / memory that's just like going hold some things temporarily.
- What you want to do is install PostgreSQL and then you create a database.
- Make sure PostgreSQL is running. One way you can test this is doing:

  ```sh
  psql -h localhost -p 5432 -U postgres
  ```

- Create database:

  ```sh
  createdb -h localhost -p 5432 -U postgres vacay_server_test
  ```

- Test server

  ```sh
  yarn test

  Determining test suites to run...Server is running on localhost:4000
  FAIL  src/modules/user/forgotPassword/forgotPassword.test.ts
  - Test suite failed to run

  SecurityError: localStorage is not available for opaque origins
  ... ... ...
  ... ... ...
  ```

  To resolve this error:

  - [Jest/jsdom GitHub issue](https://github.com/facebook/jest/issues/6766)
  - [StackOverflow](https://stackoverflow.com/questions/51554366/jest-securityerror-localstorage-is-not-available-for-opaque-origins)

- The other thing we want to setup is the website. We are using this boilerplate, [create-react-app-typescript version](https://github.com/wmonk/create-react-app-typescript).

  ```sh
  cd ..
  yarn global add create-react-app
  create-react-app web --scripts-version=react-scripts-ts

  mv ../../package.json ../../bob.json
  create-react-app web --scripts-version=react-scripts-ts

  rm -rf node_modules
  mv ../../bob.json ../../package.json
  yarn install

  yarn start

  /home/cedric/m/dev/work/repo/vacay-rental-app/packages/web/src/App.tsx
  (5,1): The internal 'module' syntax is deprecated, use the 'namespace' keyword instead.
  ```

- To fix the error related to TypeScript 3.0, replaced `packages/web/package.json` using the one from `fullstack-graphql-airbnb-clone/packages/web/package.json`. Then run `yarn install` again.

### Part 2 - Adding React Apollo and React Router

#### Set Up Apollo

- What I want to do next is go ahead and setup Apollo. Apollo is what we are going to use to make GraphQL requests. And to setup Apollo, they have a "Getting Started" page but they used Apollo Boost for that. Now, we could use Apollo Boost but I think later on we are going to do [subscriptions](https://www.apollographql.com/docs/react/advanced/subscriptions.html) and Apollo Boost does not supports subscriptions right now. What we need to do is install the libraries ourself. So the best guide on that is under the "Basic Migration" under the [Apollo Boost Migration](https://www.apollographql.com/docs/react/advanced/boost-migration.html).

#### Set Up React Router

- [React Router](https://reacttraining.com/react-router/web/example/basic)

  ```sh
  yarn add react-router-dom
  ```

- `react-router-dom` does not use TypeScript and they don't supply the types themselves. So what you have to do is that you have to install them yourself:

  ```sh
  yarn add -D @types/react-router-dom
  ```

### Part 3 - Coding React Form with Formik and Ant Design

- What we will be going to do is set up the register page a little more.

#### Ant Design

- Ant Design [use in TypeScript](https://ant.design/docs/react/use-in-typescript).
- Install and add to our project:

  ```sh
  yarn add antd
  ```

#### Form

- Next part we are going to start doing is working on the form.
- `packages/web/src/modules/register/ui/RegisterView.tsx` Borrow code from [Ant Design form component](https://ant.design/components/form/)
- We will not use the HOC from Ant Design:

  `const WrappedNormalLoginForm = Form.create()(NormalLoginForm);`

- Instead, we will use [Formik](https://github.com/jaredpalmer/formik) for this.
- Add Formik.

### Part 4 - Form Validation in Formik with Yup

- Install Yup:

  ```sh
  yarn add yup
  yarn add -D @types/yup
  ```

- Coding Yup `validationSchema`.
- Red color for validation error messages.
- TSLint rules:
  - Set `"jsx-no-multiline-js": false`
- Understanding Formik validation events, the differences/comparison:
  - `validateOnChange`
  - `validateOnBlur`

### Part 5 - Sharing Validation code between the React Web App and GraphQL Server

- Create a new directory `common` inside `packages`
- Then `cd` into this `common` directory and run `yarn init -y`.
- Open `package.json` and rename `name: "common"` to `@vacay/common`.
- Next, install some dependencies we're going to need:

  ```sh
  yarn add -D typescript@2.9.2 tslint@5.9.1 tslint-config-prettier@1.12.0
  yarn add yup
  yarn add -D @types/yup

  yarn build
  yarn add -D rimraf
  ```

- That's how you can can share code across.

### Part 6 - Simplifying a React form with the Formik Field Component

- Cleaning up our form a little bit.
- Formik `Field` component.
  - Copy the [code from Formik's `README`](https://github.com/jaredpalmer/formik#field-).

### Part 7 - Adding a Controller Package to share code between React and React Native

- `RegisterConnector.tsx`:

  ```javascript
  // controller -> connector -> view
  ```

  Today's focus is on the Controller.

- Create a new `controller` package directory:

  ```sh
  mkdir packages/controller
  ```

- Copy `web/tsconfig.json` and `web/tslint.json` to `controller`.
- Make a new `src` directory inside `controller`.
- Create `index.ts` file inside `src` directory. This is going to act exactly like how `common` package works. So, `index.ts` is going to export all the things.
- Next, install dependencies like React:

  ```sh
  yarn add react react-dom
  ```

- Install TypeScript types and more dependencies:
  ```sh
  yarn add -D @types/node @types/react @types/react-dom tslint@5.9.1 typescript@2.9.2 tslint-config-prettier@1.12.0 rimraf
  ```

### Part 8 - Calling the Register Mutation

- Today's we are going to be connecting the server and the website.
- Before we do, we need to get the server in order.
- Make sure Redis and PostgreSQL database is up and running.

#### Server package

- Fix errors:

  - In `startServer.ts`:
    - `GraphQLServer` (using `graphql-yoga`) and `genSchema` (using `graphql-tools` package) TypeScript types are in-compatible due to version mismatch.
  - In `forgotPassword.test.ts`: undefined error in `passwordNotLongEnough`. This problem was because we have moved this into the `common` package.

- Enable sending email:
  - In `resolvers.ts`, uncomment the `sendEmail` block.
  - We are using SparkPost service for doing this. So, you want to go sign up and create an account. We will get an API key.
  - SparkPost:
    - Their full-featured, free account designed for developers:
      - Up to 15,000 free messages per month, forever.
      - Access to all of their powerful API features.
      - 30 days of free technical support to get you up and running.
    - Sending your first email
      - Skip domain setup
      - How will you send email with us?
        - [ ] SMTP - set up your own mail server to send through their SMTP relay service
        - [x] REST API - use their powerful REST API to send email via simple HTTP requests
- GraphQL server

  - GraphiQL url: http://localhost:4000/
  - Test register mutation

    ```javascript
    mutation {
      register(email: "b6782294@nwytg.net", password: "b6782294@nwytg.net") {
        path
        message
      }
    }

    // Output:
    {
      "data": {
        "register": null
      }
    }
    ```

  - Next, start working on our website.

    - We want to call that register mutation from our Register controller `packages/controller/src/modules/RegisterController/index.tsx`.
    - We need to add a few packages. So, open your CLI and `cd` into `packages/controller`.

      ```sh
      yarn add react-apollo graphql-tag graphql
      ```

### Part 9 - Generating Typescript Types with Apollo Codegen

- [Apollo CLI, previously known as Apollo Codegen](https://github.com/apollographql/apollo-cli)
  - Generate static types for GraphQL queries. Can use the published schema in Apollo Engine or a downloaded schema.
- Install Apollo Codegen:
  ```sh
  yarn global add apollo-codegen@0.19.0
  ```
- Apollo Codegen introspect schema:

  ```sh
  cd packages/controller
  apollo-codegen introspect-schema http://localhost:4000 --output schema.json
  ```

- Apollo Codegen generate TypeScript types:

  ```sh
  apollo-codegen generate src/**/*.tsx --schema schema.json --target ts-modern

  .../src/modules/RegisterController/index.tsx: Apollo does not support anonymous operations
  error: Validation of GraphQL query document failed
  ```

  To fix the error, edit `controller/src/modules/RegisterController/index.tsx`.

  ```javascript
  const registerMutation = gql`
    mutation RegisterMutation($email: String!, $password: String!) {
      register(email: $email, password: $password) {
        path
        message
      }
    }
  `;
  ```

  Then re-run the command:

  ```sh
  apollo-codegen generate src/**/*.tsx --schema schema.json --target ts-modern
  ```

  Notice there's a new folder `__generated__` underneath `RegisterController`. There's now this thing called `RegisterMutation.ts`. Now we can use this. So how `ChildMutateProps` works:

  ```javascript
  class C extends React.PureComponent<ChildMutateProps<Props, any, any>> {
    submit = async (values: any) => {
      // truncated
    };

    render() {
      return this.props.children({ submit: this.submit });
    }
  }
  ```

- Add npm scripts for Apollo Codegen:

  ```json
  // Controller's package.json
  "scripts": {
    "introspect": "apollo-codegen introspect-schema http://localhost:4000 --output schema.json",
    "generate": "apollo-codegen generate src/**/*.tsx --schema schema.json --target ts-modern",
    "gen-types": "npm run introspect && npm run generate"
  }
  ```

  Add `apollo-codegen` as project dependencies:

  ```sh
  cd packages/controller
  yarn add -D apollo-codegen@0.19.0
  ```

  Before we build, we want to make sure the whole `gen-types` flow works.

  ```sh
  yarn gen-types
  ```

### Part 10 - How to put a Yarn Workspace in a Docker Image

Today, we are going to work on deploying the server. Now, it's a little tricky to deploying applications using Yarn workspaces. The reason for that is we are using local packages.

We are going to deploy the entire Yarn workspace. We are going to pretty much build the TypeScript code locally into JavaScript files, put that into a Docker image and then deploy that Docker image. So, we are going to set up the Docker image.

#### Build scripts for server

Add a script called "build" to my server.

```json
"scripts": {
  // truncated
  "build": "tsc"
},
```

Some files like \*.graphql are missing in the generated `dist` directory. So, we need to move over these files. We don't want to do this manually. There's actually a package that we can use to helps us out called [`copyfiles`](https://github.com/calvinmetcalf/copyfiles).

```sh
yarn add -D copyfiles rimraf
```

```json
"scripts": {
  // truncated
  "build": "rimraf dist && tsc && copyfiles -u 1 src/**/*.graphql dist"
}
```

```sh
yarn build
```

#### Docker container

Next, we are going to install Docker and get an app into Docker container. Node.JS website has a nice tutorial on how to [set up Node.js app with Docker](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/).

In the next steps, we'll look at how you can run this app inside a Docker container using the official Docker image. First, you'll need to build a Docker image of your app.

Create a Dockerfile.

Then, create a `.dockerignore` file.

Building your image:

_Make sure you are in the root directory._

```sh
docker build -t cedrickchee/vacay-rental-app:1.0.0 .
```

Run the image:

```sh
docker run -p 3001:4000 --net="host" cedrickchee/vacay-rental-app:1.0.0
```

[Ways to debug a crashed Docker container](https://medium.com/@pimterry/5-ways-to-debug-an-exploding-docker-container-4f729e2c0aa8).

### Part 11 - Deploying a Typescript Server to Digital Ocean with Dokku

We are going to take the Docker image that we build previously and deploy it to DigitalOcean using [Dokku](http://dokku.viewdocs.io/dokku/).

Once we have set up Dokku, connect to it using SSH:

```sh
ssh -XC -i <rsa_keypair.pem> ubuntu@<server_ip_address>
X11 forwarding request failed on channel 0
... ... ...
... ... ...
Connection to 52.42.6.202 closed.
```

#### Dokku Web GUI Installer

Dokku host URL: http://<subdomain.somedomain.com>/

- Dokku Setup v0.12.11
  - Admin Access
    - Public Key: <rsa_keypair>
  - HOSTNAME CONFIGURATION
    - Hostname: <subdomain.somedomain.com>
  - [x] Use virtualhost naming for apps
  - Your app URLs will look like: http://<app-name>.<subdomain.somedomain.com>

Next, [deploy to Dokku](http://dokku.viewdocs.io/dokku~v0.12.11/deployment/application-deployment/).

#### Create the app

Create the application on the Dokku host. You will need to SSH onto the host to run this command.

```sh
# on the Dokku host
dokku apps:create vacay
```

#### Create the backing services:

- When you create a new app, Dokku by default does not provide any datastores such as PostgreSQL. You will need to install plugins to handle that, but fortunately [Dokku has official plugins](http://dokku.viewdocs.io/dokku~v0.12.11/community/plugins/#official-plugins-beta) for common datastores. Our app requires a PostgreSQL service:

```sh
# on the Dokku host
# install the postgres plugin
# plugin installation requires root, hence the user change
sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git postgres

-----> Cloning plugin repo https://github.com/dokku/dokku-postgres.git to /var/lib/dokku/plugins/available/postgres
Cloning into 'postgres'...
remote: Counting objects: 1225, done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 1225 (delta 1), reused 5 (delta 1), pack-reused 1216
Receiving objects: 100% (1225/1225), 264.35 KiB | 0 bytes/s, done.
Resolving deltas: 100% (826/826), done.
Checking connectivity... done.
-----> Plugin postgres enabled
Removed symlink /etc/systemd/system/docker.service.wants/dokku-redeploy.service.
Created symlink from /etc/systemd/system/docker.service.wants/dokku-redeploy.service to /etc/systemd/system/dokku-redeploy.service.
-----> Migrating zero downtime env variables to 0.5.x. The following variables have been deprecated
=====> DOKKU_SKIP_ALL_CHECKS DOKKU_SKIP_DEFAULT_CHECKS
=====> Please use dokku checks:[disable|enable] <app> to control zero downtime functionality
=====> Migration complete
=====>
-----> Migrating zero downtime env variables to 0.6.x. The following variables will be migrated
=====> DOKKU_CHECKS_ENABLED -> DOKKU_CHECKS_SKIPPED
=====> Migration complete
=====>
Adding user dokku to group adm
-----> Migrating DOKKU_NGINX env variables. The following variables will be migrated
=====> DOKKU_NGINX_PORT -> DOKKU_PROXY_PORT
=====> DOKKU_NGINX_SSL_PORT -> DOKKU_PROXY_SSL_PORT
=====> Migration complete
[ ok ] Starting nginx (via systemctl): nginx.service.
10.2: Pulling from library/postgres
3e731ddb7fc9: Pull complete
6c47120e994b: Pull complete
5f766d668e8a: Pull complete
25131cac3889: Pull complete
64d99bc5f521: Pull complete
52f77b20404c: Pull complete
f170bb6b5bb2: Pull complete
13d81ba24d2f: Pull complete
2a967418f27e: Pull complete
e2be162d20ac: Pull complete
8809054a7d3a: Pull complete
330d4f0775cd: Pull complete
ff84a9ce0acb: Pull complete
Digest: sha256:7361bae1fbf5642099663d1f02dc949cabde1f86727bf8ff00d0a8806640a617
Status: Downloaded newer image for postgres:10.2
latest: Pulling from svendowideit/ambassador
8f4ec95ceaee: Pull complete
a3ed95caeb02: Pull complete
61c250ee435e: Pull complete
67e9eadbde8c: Pull complete
Digest: sha256:bb60fceae45493a7ce17c19958a38caf8d5b6869958fc9c7f78885c75f1881cf
Status: Downloaded newer image for svendowideit/ambassador:latest
0.2: Pulling from dokkupaas/wait
9dce7caf6169: Pull complete
5b8e4c6b49c1: Pull complete
e9ce726586a3: Pull complete
Digest: sha256:a829d552e0e55c858b70a7d6f0e5bc9a5cc18b42bc8832271deaff3fed5fa212
Status: Downloaded newer image for dokkupaas/wait:0.2
0.8.0: Pulling from dokkupaas/s3backup
019300c8a437: Pull complete
1be93b9dcc6e: Pull complete
072ed70e6b6e: Pull complete
6e9810ddb7cd: Pull complete
5002add25148: Pull complete
c05b123fd5f0: Pull complete
Digest: sha256:032ebf48626bddd422a88ae7e7675187b296a81488ec738f28c53dbf57f94788
Status: Downloaded newer image for dokkupaas/s3backup:0.8.0
latest: Pulling from library/busybox
8c5a7da1afbc: Pull complete
Digest: sha256:cb63aa0641a885f54de20f61d152187419e8f6b159ed11a251a09d115fdff9bd
Status: Downloaded newer image for busybox:latest
-----> Priming bash-completion cache
```

Next, create a postgres database and link it to our app:

```sh
# create a postgres service with the name vacay-pg
dokku postgres:create vacay-pg

       Waiting for container to be ready
       Creating container database
       Securing connection to database
=====> Postgres container created: vacay-pg
=====> Container Information
       Config dir:          /var/lib/dokku/services/postgres/vacay-pg/config
       Data dir:            /var/lib/dokku/services/postgres/vacay-pg/data
       Dsn:                 postgres://postgres:73718a29bd63f3da1090239c9beab0d4@dokku-postgres-vacay-pg:5432/vacay_pg
       Exposed ports:       -
       Id:                  0f4d354ed0db575e52286853b96d030f405a16857f3ade1444c1a7bc102f78e3
       Internal ip:         172.17.0.2
       Links:               -
       Service root:        /var/lib/dokku/services/postgres/vacay-pg
       Status:              running
       Version:             postgres:10.2
```

#### Linking backing services to applications

Once the service creation is complete, set the `POSTGRES_URL` environment variable by linking the service.

A PostgreSQL service can be linked to a container. This will use native docker links via the docker-options plugin. Here we link it to our 'vacay' app. NOTE: this will restart your app.

```sh
# on the Dokku host
# each official datastore offers a `link` method to link a service to any application
dokku postgres:link vacay-pg vacay

-----> Setting config vars
       DATABASE_URL:  postgres://postgres:73718a29bd63f3da1090239c9beab0d4@dokku-postgres-vacay-pg:5432/vacay_pg
-----> Restarting app vacay
 !     App vacay has not been deployed
```

Repeat the steps for Redis. Refer to the [official Redis plugin for Dokku](https://github.com/dokku/dokku-redis) docs.

```sh
sudo dokku plugin:install https://github.com/dokku/dokku-redis.git redis

-----> Cloning plugin repo https://github.com/dokku/dokku-redis.git to /var/lib/dokku/plugins/available/redis
Cloning into 'redis'...
remote: Counting objects: 1255, done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 1255 (delta 1), reused 5 (delta 1), pack-reused 1246
Receiving objects: 100% (1255/1255), 258.30 KiB | 0 bytes/s, done.
Resolving deltas: 100% (836/836), done.
Checking connectivity... done.
-----> Plugin redis enabled
Removed symlink /etc/systemd/system/docker.service.wants/dokku-redeploy.service.
Created symlink from /etc/systemd/system/docker.service.wants/dokku-redeploy.service to /etc/systemd/system/dokku-redeploy.service.
-----> Migrating zero downtime env variables to 0.5.x. The following variables have been deprecated
=====> DOKKU_SKIP_ALL_CHECKS DOKKU_SKIP_DEFAULT_CHECKS
=====> Please use dokku checks:[disable|enable] <app> to control zero downtime functionality
=====> Migration complete
=====>
-----> Migrating zero downtime env variables to 0.6.x. The following variables will be migrated
=====> DOKKU_CHECKS_ENABLED -> DOKKU_CHECKS_SKIPPED
=====> Migration complete
=====>
Adding user dokku to group adm
-----> Migrating DOKKU_NGINX env variables. The following variables will be migrated
=====> DOKKU_NGINX_PORT -> DOKKU_PROXY_PORT
=====> DOKKU_NGINX_SSL_PORT -> DOKKU_PROXY_SSL_PORT
=====> Migration complete
[ ok ] Starting nginx (via systemctl): nginx.service.
4.0.8: Pulling from library/redis
b0568b191983: Pull complete
6637dc5b29fe: Pull complete
7b4314315f15: Pull complete
67b22db27e51: Pull complete
350dbcc91819: Pull complete
eee5ee716895: Pull complete
Digest: sha256:26c93c5b06eaa323bb1089500f42b0dd158138772348b865e364127f1d554982
Status: Downloaded newer image for redis:4.0.8
-----> Priming bash-completion cache
```

Create a Redis service named `red`

```sh
dokku redis:create red

       Waiting for container to be ready
=====> Redis container created: red
=====> Container Information
       Config dir:          /var/lib/dokku/services/redis/red/config
       Data dir:            /var/lib/dokku/services/redis/red/data
       Dsn:                 redis://red:267f61b8ef2b31decf5a631a29b3c62ada5303795b941a4a28fe60a0333ce434@dokku-redis-red:6379
       Exposed ports:       -
       Id:                  a77039d98efcfdc82ff05d49ddb7edea8e2c8d30c8334f643b18b799bc74c916
       Internal ip:         172.17.0.3
       Links:               -
       Service root:        /var/lib/dokku/services/redis/red
       Status:              running
       Version:             redis:4.0.8
```

Link Redis service to our 'vacay' app container:

```sh
dokku redis:link red vacay

-----> Setting config vars
       REDIS_URL:  redis://red:267f61b8ef2b31decf5a631a29b3c62ada5303795b941a4a28fe60a0333ce434@dokku-redis-red:6379
-----> Restarting app vacay
 !     App vacay has not been deployed
```

Edit `ormconfig.json`. Modify `redis.ts` and `createTypeormConn.ts` to get the connection configuration from the environment variables, `REDIS_URL` and `DATABASE_URL`.

Next, push our code, so take our Docker image and put it on Dokku. Here's how we do that—They have a docs on it called [Docker Image Tag Deployment](http://dokku.viewdocs.io/dokku~v0.12.11/deployment/methods/images/)

> The Dokku tags plugin allows you to add docker image tags to the currently deployed app image for versioning and subsequent deployment.

The stuff at the bottom (a more complete example using the method) of that page is the most helpful.

```sh
# build the image
docker build -t cedrickchee/vacay-rental-app:1.0.0 .
```

After that, you want to put the image on Dokku host:

Basically, what the below command trying to do is sending the image through SSH. I can't get this to work. So, what I do instead is I just use [Docker Hub](https://hub.docker.com/).

```sh
# copy the image to the dokku host
# docker save dokku/test-app:v12 | bzip2 | ssh my.dokku.host "bunzip2 | docker load"
```

```sh
$ docker login
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username:
WARNING! Your password will be stored unencrypted in /home/cedric/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
```

Push image to Docker Hub:

```sh
docker push cedrickchee/vacay-rental-app:1.0.0

The push refers to repository [docker.io/cedrickchee/vacay-rental-app]
0de61a99e427: Pushed
0f8a6683eebf: Pushed
... ... ...
e0eb4b156dd5: Pushed
63be7469c1be: Pushed
1d346e46d556: Mounted from library/node
d8a71178df17: Mounted from library/node
e492023cc4f9: Mounted from library/node
cbda574aa37a: Mounted from library/node
8451f9fe0016: Mounted from library/node
858cd8541f7e: Mounted from library/node
a42d312a03bb: Mounted from library/node
dd1eb1fd7e08: Mounted from library/node
1.0.0: digest: sha256:7d861e4c058479b8a6b90fc50294d282453ae7eac0008683aea8a302f5951738 size: 4298
```

```sh
# In the Dokku host
docker login
sudo docker pull cedrickchee/vacay-rental-app:1.0.0
1.0.0: Pulling from cedrickchee/vacay-rental-app

d660b1f15b9b: Pull complete
46dde23c37b3: Pull complete
6ebaeb074589: Pull complete
... ... ...
c0711f8479e5: Pull complete
f7268f23bbf6: Pull complete
Digest: sha256:7d861e4c058479b8a6b90fc50294d282453ae7eac0008683aea8a302f5951738
Status: Downloaded newer image for cedrickchee/vacay-rental-app:1.0.0
```

Tag and deploy the image:

```sh
# In the Dokku host
sudo docker tag cedrickchee/vacay-rental-app:1.0.0 dokku/vacay:latest

dokku tags:deploy vacay latest

-----> Setting config vars
       DOKKU_DOCKERFILE_PORTS:  4000/tcp
-----> Releasing vacay (dokku/vacay:latest)...
-----> Deploying vacay (dokku/vacay:latest)...
-----> Attempting to run scripts.dokku.predeploy from app.json (if defined)
-----> No Procfile found in app image
-----> DOKKU_SCALE file not found in app image. Generating one based on Procfile...
-----> New DOKKU_SCALE file generated
=====> web=1
-----> Attempting pre-flight checks
       For more efficient zero downtime deployments, create a file CHECKS.
       See http://dokku.viewdocs.io/dokku/deployment/zero-downtime-deploys/ for examples
       CHECKS file not found in container: Running simple container check...
-----> Waiting for 10 seconds ...
-----> Default container check successful!
-----> Running post-deploy
-----> Creating new /home/dokku/vacay/VHOST...
-----> Setting config vars
       DOKKU_PROXY_PORT_MAP:  http:4000:4000
-----> Configuring vacay.dokku.invictusbyte.com...(using built-in template)
-----> Creating http nginx.conf
-----> Running nginx-pre-reload
       Reloading nginx
-----> Setting config vars
       DOKKU_APP_RESTORE:  1
=====> Renaming container (22af459fd047) wizardly_nightingale to vacay.web.1
-----> Attempting to run scripts.dokku.postdeploy from app.json (if defined)
=====> Application deployed:
       http://vacay.dokku.invictusbyte.com
       http://vacay.dokku.invictusbyte.com:4000
```

[Proxy management](http://dokku.viewdocs.io/dokku~v0.12.11/networking/proxy-management/)—check Dokku port mappings:

```sh
dokku proxy:ports vacay

-----> Port mappings for vacay
-----> scheme             host port                 container port
http                      4000                      4000

# ...or
dokku proxy:report vacay

=====> vacay proxy information
       Proxy enabled:                 true
       Proxy type:                    nginx
       Proxy port map:                http:4000:4000
```

[Proxy Port Management](http://dokku.viewdocs.io/dokku~v0.12.11/networking/port-management/).

Add proxy port mappings for app:

```sh
dokku proxy:ports-add vacay http:80:4000

-----> Setting config vars
       DOKKU_PROXY_PORT_MAP:  http:4000:4000 http:80:4000
-----> Configuring vacay.dokku.invictusbyte.com...(using built-in template)
-----> Creating http nginx.conf
-----> Running nginx-pre-reload
       Reloading nginx
```

Open app URL in browser: http://vacay.dokku.invictusbyte.com/ You should see GraphiQL.

### Part 12 - Automating Dokku Deployment and Lerna

We are going to fix the problem we are having with TypeORM in the previous part. The problem is in the `ormconfig.json`. There is no `src` folder at the `packages/server/dist` code. So, value for the `entities` attribute is invalid.

```json
[
  {
    "name": "production",
    "type": "postgres",
    "synchronize": true,
    "logging": true,
    "entities": ["src/entity/**/*.js"],
    "migrations": ["src/migration/**/*.js"],
    "subscribers": ["src/subscriber/**/*.js"],
    "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
    }
  }
]
```

Modify `packages/server/src/utils/createTypeormConn.ts`. Add new `entities` parameter into `createConnection` function:

```javascript
    ? createConnection({
        ...connectionOptions,
        url: process.env.DATABASE_URL,
        entities: [User],
        name: "default"
      } as any)
```

Now, we are basically going to redeploy stuffs. We are going to automate that. To helps us automate that, we are using a tool called [Lerna](https://lernajs.io/). So, go ahead and install Lerna:

```sh
yarn global add lerna
```

Then, run:

```sh
# On the root directory
lerna init
```

[Integrate Lerna with Yarn Workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/):

So, now Lerna knows that we are using Yarn and we are also using Workspaces.

Modify the root `package.json` and add build scripts:

```json
  "scripts": {
    "build:server": "lerna run build --scope={@vacay/common,@vacay/server}"
  },
```

Build our code:

```sh
yarn build:server

yarn run v1.9.4
$ lerna run build --scope={@vacay/common,@vacay/server}
lerna notice cli v3.1.4
lerna info filter [ '{@vacay/common,@vacay/server}' ]
$ rimraf ./dist && tsc
$ rimraf dist && tsc && copyfiles -u 1 src/**/*.graphql dist
lerna success run Ran npm script 'build' in 2 packages:
lerna success - @vacay/common
lerna success - @vacay/server
Done in 13.64s.
```

Next, we're going to create a script that will deploy everything. Create a new file on the root say `deploy_server_aws.sh`.

```sh
chmod +x deploy_server_aws.sh
./deploy_server_aws.sh
```

### Part 13 - Deploying a Typescript Server to Heroku with Docker

We are going to be deploying to [Heroku](https://heroku.com).

In this step you’ll install the [Heroku Command Line Interface (CLI)](https://devcenter.heroku.com/articles/heroku-cli). You use the CLI to manage and scale your applications, provision add-ons, view your application logs, and run your application locally.

I'm using Ubuntu 16.04. So, I run the following from my terminal:

```sh
sudo snap install --classic heroku
```

Then, follow the instructions there.

```sh
heroku login

 ›   Warning: heroku update available from 7.7.4 to 7.12.1
heroku: Enter your login credentials
Email: <enter_your_email_address>
Password: ******************************************************
Two-factor code: ******
Logged in as <enter_your_email_address>
```

Next up, follow this [guide](https://devcenter.heroku.com/articles/container-registry-and-runtime) here for deploying our Docker image.

Log in to Container Registry:

```sh
heroku container:login
Login Succeeded

heroku create
Creating app... done, ⬢ morning-ridge-37457
https://morning-ridge-37457.herokuapp.com/ | https://git.heroku.com/morning-ridge-37457.git
```

Next, add [Heroku Add-Ons](https://elements.heroku.com/addons). Install [Postgres](https://elements.heroku.com/addons/heroku-postgresql) and [Redis](https://elements.heroku.com/addons/heroku-redis) add-ons.

The next step is build the image and push to Container Registry. Before that, we need to change our code for "[unsupported Dockerfile commands](https://devcenter.heroku.com/articles/container-registry-and-runtime#unsupported-dockerfile-commands)"

> EXPOSE - While EXPOSE can be used for local testing, it is not supported in Heroku's container runtime. Instead your web process/code should get the $PORT environment variable.

So, change `startServer.ts` code:

```javascript
const port = process.env.PORT || 4000;
const app = await server.start({
  cors,
  port: process.env.NODE_ENV === "test" ? 0 : port
});
```

```sh
# In deploy_server_aws.sh
# heroku container:push web
# heroku container:release web

cd <roo_dir>

./deploy_server_aws.sh

yarn run v1.9.4
$ lerna run build --scope={@vacay/common,@vacay/server}
lerna notice cli v3.1.4
lerna info filter [ '{@vacay/common,@vacay/server}' ]
$ rimraf ./dist && tsc
$ rimraf dist && tsc && copyfiles -u 1 src/**/*.graphql dist
lerna success run Ran npm script 'build' in 2 packages:
lerna success - @vacay/common
lerna success - @vacay/server
Done in 13.93s.
=== Building web (/home/cedric/m/dev/work/repo/vacay-rental-app/Dockerfile)
Sending build context to Docker daemon  171.5kB
Step 1/16 : FROM node
 ---> b064644cf368
Step 2/16 : WORKDIR /vacay-rental-app
 ---> Using cache
 ---> 320056bb13bb
Step 3/16 : COPY ./package.json .
 ---> Using cache
 ---> 2aac2647d82c
... ... ...
... ... ...
Removing intermediate container 6468a8c1985e
 ---> 7a9b1efea424
Successfully built 7a9b1efea424
Successfully tagged registry.heroku.com/morning-ridge-37457/web:latest
=== Pushing web (/home/cedric/m/dev/work/repo/vacay-rental-app/Dockerfile)
The push refers to repository [registry.heroku.com/morning-ridge-37457/web]
a079918b9a67: Pushed
a84d6579d8e0: Pushed
3dc504a135a7: Pushed
13e46e882102: Pushed
... ... ...
... ... ...
858cd8541f7e: Pushed
a42d312a03bb: Pushed
dd1eb1fd7e08: Pushed
latest: digest: sha256:ab679a0ad2de96de43abce4020680755acc924af3fe0cf81c0d90d68f13d3318 size: 4298
Your image has been successfully pushed. You can now release it with the 'container:release' command.
 ▸    heroku container:push no longer creates a release.
 ▸    Run heroku container:release to create a release with this image.
Releasing images web to morning-ridge-37457... done

heroku open
```

### Part 14 - Deploying a React App with Netlify

We are going to deploy our React app to [Netlify](https://www.netlify.com/). This is my favourite places to deploy websites and front-ends to now just because they have such a great free plan and it's really easy to get up and running and they have so many features that are available to you. So, create an account with them and then also install the [command line tools](https://www.netlify.com/docs/cli/).

I'm on a Linux workstation. So, I will be following the "[Direct Binary Install](https://github.com/netlify/netlifyctl/blob/master/README.md#direct-binary-install-linux-mac-windows)" method:

```sh
# run the following command to download and extract the binary file directly into the current directory in a Linux terminal
cd ~/bin
wget -qO- 'https://cli.netlify.com/download/latest/linux' | tar xz
```

Then, to use `netlifyctl` in that directory, you would use the relative path to the binary: `./netlifyctl`.

Before we go ahead and deploy this to Netlify, we need to make a few changes to our front-end. The first is the `apollo.ts` file. Right now we have hard-coded what
the server URL is.

```javascript
export const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000",
    credentials: "include"
  }),
  cache: new InMemoryCache()
});
```

This works for development but when we're in production, we want this to be pointing at different server because it can't access localhost. So, we will make this into an environment variable:

```javascript
export const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_SERVER_URL,
    credentials: "include"
  }),
  cache: new InMemoryCache()
});
```

Now, we need to set this environment variable `process.env.REACT_APP_SERVER_URL`. You may be wondering why I prefixed it with `REACT_APP_`, this is something from how `create-react-app` works. You can read more about "[Adding Custom Environment Variables](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables)".

For development environment, create `.env.development` file underneath `packages/web` directory.
For production, create `.env.production` file.

_Note that these two files are ok to share. It's not secret._

So, we have that set up now. That will work. Our front-end is pretty much good to go. We don't have to touch anything else. We are going to create a script kind of how we did with the server to automate deployments. Create a `deploy_web.sh` file on root directory.

Then, build web:

```sh
# In local and project root directory.
yarn build:web

yarn run v1.9.4
$ lerna run build --scope={@vacay/common,@vacay/web}
lerna notice cli v3.1.4
lerna info filter [ '{@vacay/common,@vacay/web}' ]
$ rimraf ./dist && tsc
$ react-scripts-ts build
Creating an optimized production build...
Starting type checking and linting service...
Using 1 worker with 2048MB memory limit
ts-loader: Using typescript@2.9.2 and /home/cedric/m/dev/work/repo/vacay-rental-app/packages/web/tsconfig.prod.json
Compiled successfully.

File sizes after gzip:

  442.34 KB  build/static/js/main.45d8f9ba.js
  53.09 KB   build/static/css/main.2d09f83f.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  http://bit.ly/2vY88Kr

lerna success run Ran npm script 'build' in 2 packages:
lerna success - @vacay/common
lerna success - @vacay/web
Done in 76.29s.
```

Before we can even deploy this, we need to create an app on Netlify.

Log in to Netlify to obtain access token using:

```sh
# In local and project root directory.
# This will open a browser window, asking you to log in with Netlify and grant access to Netlify Cli.
netlifyctl login
```

And finally, [deploy](https://github.com/netlify/netlifyctl/blob/master/README.md#manual-deploy) the static website using the following command:

```sh
netlifyctl deploy

Create a new site? (yes/no) yes
Site created  ✔
What path would you like deployed? (default: .) ./packages/web/build
Counting objects: 10 total objects  ✔
Resolving deltas: 7 objects to upload  ✔
Uploading objects: 7/7 done  ✔
Deploy done  🌎
    https://quizzical-neumann-ccba94.netlify.com
```

Finish off the deploy script that we've build. Then run:

```sh
chmod +x deploy_web.sh
./deploy_web.sh
```

### Part 15 - Setting up React Native with Expo

We are going to set up the React Native app. We are using something called [Expo](https://expo.io/). This is a tool that helps you and makes things a little bit easier when dealing with React Native. We are going to be using Expo itself and not [Create Reactive Native App](https://github.com/react-community/create-react-native-app) (CRNA).

Let's get started. You'll want to install Expo command line tools.

```sh
yarn add global expo-cli
```

Then, clone our [repository](https://github.com/benawad/typescript-yarn-workspace-example):

```sh
# In project root directory
cd packages
git clone https://github.com/benawad/typescript-yarn-workspace-example.git
cd typescript-yarn-workspace-example
git checkout 1_add_ts_rn

Branch '1_add_ts_rn' set up to track remote branch '1_add_ts_rn' from 'origin'.
Switched to a new branch '1_add_ts_rn'

# Grab the app directory out of that
mv packages/app/ ../app
```

The other thing is, we need to grab the 'noHoist' things from `packages/typescript-yarn-workspace-example/package.json` and move it to the root `package.json`. Then delete the `typescript-yarn-workspace-example` directory as we don't need it anymore.

```sh
cd ..
rm -rf typescript-yarn-workspace-example

# Get rid of yarn.lock in the app directory
rm -rf app/yarn.lock
```

Next, install dependencies for our `app` package:

```sh
cd packages/app
yarn install
```

Start iOS simulator or Android emulator. Then run the following commands:

```sh
# In app directory
# Start Expo server
yarn

# Run our app on the emulator/device
yarn run android
```

Some issues I encountered while trying to run our Expo app on the Android emulator:

- ["Uncaught Error: 20.0.0 is not a valid SDK version."](https://github.com/expo/expo/issues/568)
  - Solution: re-installing Expo on the emulator/device worked.

### Part 16 - Adding GraphQL and Routing to React Native

Packages that we will be using:

- Apollo GraphQL
- [React Native Elements](https://react-native-training.github.io/react-native-elements/) for UI
  Install some packages for our mobile app:

```sh
yarn add react-router-native react-native-elements apollo-client apollo-cache-inmemory apollo-link-http graphql react-apollo graphql-tag
yarn add -D @types/react-native-elements @types/react-router-native
```

Write code in app.

Start Expo server (JS packager). Reload the Android app. Encountered error:
"[01:12:44] /home/cedric/m/dev/work/repo/vacay-rental-app/node_modules/react-native-elements/src/index.js: Couldn't find preset "react-native" relative to directory "/home/cedric/m/dev/work/repo/vacay-rental-app/node_modules/react-native-elements""

Whenever you see this type of error, at least when you have a Yarn Workspace set up, it's usually because of Yarn Workspace modules being in the wrong `node_modules`.
To fix this, we need to no `nohoist` react-router-native in the root `package.json`. Then:

```sh
# In packages/app directory, kill these node_modules
rm -rf node_modules/ ../../node_modules/
yarn install
```

### Part 17 - How to use Formik with React Native

We are building out the register form in React Native app. We need to install two dependencies for that.

```json
// add formik and @vacay/common packages
"dependencies": {
  "@vacay/common": "1.0.0",
  "formik": "^0.11.11",
  "graphql": "^0.13.2",
  // ... ... truncted ... ...
},
```

```sh
cd packages/app

# In packages/app directory
yarn add formik
```

Upgrade react native elements to use version 1.0.0-beta5:

```sh
yarn add react-native-elements@1.0.0-beta5
```

*Note that TypeScript types come bundled with that package now.*. So, make sure you also remove types for react native elements:

```sh
yarn remove @types/react-native-elements
```