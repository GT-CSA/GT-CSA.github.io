forked from https://github.com/contentful/starter-gatsby-blog

https://www.contentful.com/blog/2018/08/17/a-guide-to-creating-static-sites-with-react-gatsby-contentful-and-netlify/
https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/
https://www.figma.com/file/KJLefrdMyclUBffCf6eSXR/Website-Design?node-id=2%3A49

https://stackoverflow.com/questions/32018238/how-to-use-an-svg-shape-to-mask-an-image
https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path

# Contentful Gatsby Starter Blog

Create a [Gatsby](http://gatsbyjs.com/) blog powered by [Contentful](https://www.contentful.com).

Static sites are scalable, secure and have very little required maintenance. They come with a drawback though. Not everybody feels good editing files, building a project and uploading it somewhere. This is where Contentful comes into play.

With Contentful and Gatsby you can connect your favorite static site generator with an API that provides an easy to use interface for people writing content and automate the publishing using services like [Travis CI](https://travis-ci.org/) or [Netlify](https://www.netlify.com/).

## Features

- Simple content model and structure. Easy to adjust to your needs.
- Use the [synchronization feature](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization) of our [Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/).
- Responsive/adaptive images via [gatsby-plugin-image](https://www.gatsbyjs.org/packages/gatsby-plugin-image/) and our [Images API](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization/initial-synchronization-of-entries-of-a-specific-content-type).

## Getting started

See our [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

### Get the source code and install dependencies.

```
$ git clone https://github.com/contentful/starter-gatsby-blog.git
$ npm install
```

Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new contentful-starter-blog https://github.com/contentful/starter-gatsby-blog/
```

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `npm run setup`.

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (`./.contentful.json`).

`npm run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.

## Deployment

See the [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

## Contribution

Feel free to open pull requests to fix bugs. If you want to add features, please have a look at the [original version](https://github.com/contentful-userland/gatsby-contentful-starter). It is always open to contributions and pull requests.

You can learn more about how Contentful userland is organized by visiting [our about repository](https://github.com/contentful-userland/about).

## Deploy the blog

A blog on your local machine is nice to have, but a blog on the internet is even better. Return to the [tutorial doc](https://www.contentful.com/developers/docs/tutorials/general/get-started/#deploy-the-starter-gatsby-blog), select a hosting service (Gatsby Cloud, Netlify, or Heroku) and follow the instructions to deploy.

## Explore the blog content structure

Return to the [tutorial doc](https://www.contentful.com/developers/docs/tutorials/general/get-started/#explore-how-the-sample-website-is-built-with-contentful) to view the relationship between the blog content and the data model.

## Modify content and redeploy

Follow this [tutorial](https://www.contentful.com/developers/docs/tutorials/general/automate-site-builds-with-webhooks/) to learn how to use webhooks to automate the process of redeploying your site after publishing new content.
