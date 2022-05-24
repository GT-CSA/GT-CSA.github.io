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

Deployment is done through the [GitHub Pages](https://github.com/marketplace/actions/github-pages-action) action. This action updates the `gh-pages` branch with a new commit and deploys the result to GitHub pages.

## Contribution

This repository was created by [Matt Chen](https://github.com/Fattimo), Acting President of CSA 2021-22.

Feel free to make pull requests to this code.
