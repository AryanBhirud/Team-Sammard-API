const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const marked = require('marked');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

function renderMarkdownFile(filePath) {
  const markdownContent = fs.readFileSync(filePath, 'utf8');
  return marked(markdownContent);
}

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//   res.json({
//     message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
//   });
// });
router.get('/', (req, res) => {
  const htmlContent = renderMarkdownFile("../api/api_documentation.md");
  res.send(htmlContent);
});

app.use('/datapacket', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
