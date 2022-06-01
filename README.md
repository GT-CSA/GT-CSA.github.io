# Georgia Institute of Technology Chinese Student Association Website

Official site of the Chinese Student Association of Georgia Tech.

Static [Gatsby](http://gatsbyjs.com/) site powered by [Contentful](https://www.contentful.com), forked from the official [Contentful Starter Blog](https://github.com/contentful/starter-gatsby-blog).

This site can be hosted in 2 different locations (see [deployment](#deployment) below for more information):

1. GitHub Pages (for development)
2. [Georgia Tech Hosting](https://hosting.gatech.edu) (for production)

## Getting started

See the [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

### Get the source code and install dependencies.

```
$ git clone https://github.com/contentful/starter-gatsby-blog.git
$ yarn
```

### Set up of the needed content model and create a configuration file

Rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

### `yarn dev`

Run the project locally with live reload in development mode.

### `yarn build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `yarn serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.

## Deployment

Deployment is done through the [GitHub Pages](https://github.com/marketplace/actions/github-pages-action) action. This action updates the `gh-pages` branch with a new commit and deploys the result to GitHub pages. This branch can be deleted in case development is on pause and not necessary.

The same action updates the `plesk` branch, which is the branch [Georgia Tech Plesk Hosting](https://hosting.gatech.edu) reads from and auto-updates.

### Contentful Hook

The deployment workflow is also tied to a Contentful update webhook action, meaning whenever anything in the Gerogia Tech CSA Contentful space is updated, the site will redeploy and reflect those changes. For actions run by the webhook, it will always take more than 5 minutes so as to wait for Contentful's API to properly reflect any changes.

A GitHub PAT is necessary in order for this to work. In case the hook does not trigger or fails any actions, please check if the PAT has expired, and regenerate it in case it has.

## Contribution

This repository was created by [Matt Chen](https://github.com/Fattimo), Acting President of CSA 2021-22.

Feel free to make pull requests to this code.
