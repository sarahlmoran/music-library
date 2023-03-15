const express = require('express');
const path = require('path');
const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

const options = {
  swaggerDefinition: {
    info: {
      title: "My MusicLibrary",
      version: "1.0.0",
      description: "My API for interacting with my Postgres musicLibrary",
    },
  },
  apis: [path.join(__dirname, "./routes/*.js")],
};
const swaggerSpecs = swaggerJsdoc(options);

app.use('/artists', artistRouter);

app.use('/artists', albumRouter);

app.use('/albums', albumRouter);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.get('/', (req, res) => {
  res.status(200).json('Hello World');
});

module.exports = app;
