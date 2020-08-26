const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const collections = require('metalsmith-collections');
const permalinks = require('metalsmith-permalinks');
const handlebars = require('handlebars');
const fs = require('fs');

const path = require('path');
const pwd = path.join(__dirname, "..");

// Navigation
handlebars.registerPartial('navigation', fs.readFileSync(pwd + '/layouts/partials/navigation.hbs').toString());

 const serve = require('metalsmith-serve');
 const watch = require('metalsmith-watch');


Metalsmith(pwd)
  .source('src')
  .destination('public')
  .use(collections({
    articles: {
      pattern: 'articles/*.md',
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