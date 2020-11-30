# Mars Project

> Udacity Intermediate JavaScript Nanodegree

## Live Production URL

<https://mars-rovers-dashboard.herokuapp.com/>

## Run Production Build Locally

1. An API key needs to used be used to work with the NASA API. If you don't have
   one already, a key can be generated [here](https://api.nasa.gov/) on NASA's site.
2. Locate the file named `.env-example` and change the name of it to `.env`.
3. Open this `.env` file and paste your NASA API key immediately after the text
   that already exists in the file, which is `API_KEY=`.
4. Follow the steps below for your dependecy manager of choice to setup the
   project and run it locally.

### Setup With NPM

```shell
npm install
npm run build:local
npm run start
```

### Setup With Yarn

```shell
yarn install
yarn build:local
yarn start
```

## About

- This app uses Parcel.js to bundle the client-side of this application.
- This is the second of three projects for Udacity's Intermediate JavaScript
  Nanodegree.
