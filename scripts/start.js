const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const collections = require('metalsmith-collections');
const permalinks = require('metalsmith-permalinks');
const handlebars = require('handlebars');
//const jstransformer = require('jstransformer-handlebars');
//const place = require('');
const fs = require('fs');

const path = require('path');
const pwd = path.join(__dirname, "..");

// Navigation
handlebars.registerPartial('navigation', fs.readFileSync(pwd + '/layouts/partials/navigation.hbs').toString());

// NOTE: Uncomment if you want a server for development
 const serve = require('metalsmith-serve');
 const watch = require('metalsmith-watch');


Metalsmith(pwd)
  .source('src')
  .destination('public')
  .use(collections({
    articles: {
      pattern: ['articles/*.md', 'css/*.css'],
    },
  }))
  .use(markdown())
  .use(permalinks({
    pattern: ':collection/:title'
  }))
  .use(layouts({
    engine: 'handlebars',
    directory: './layouts',
    default: 'article.html',
    pattern: ["*/*/*html", "*/*html", "*html"],
    partials: {
      navigation: 'partials/navigation',
    }
  }))

// NOTE: Uncomment if you want a server for development
.use(serve({
    port: 8081,
    verbose: true
  }))
  .use(watch({
    paths: {
      "${source}/**/*": "**/*",
      "layouts/**/*": "**/*",
    }
  }))

  .build(function (err) {
    if (err) {
      console.error(err);
    }
    else {
      console.log('build completed!');
    }
  });