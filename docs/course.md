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
