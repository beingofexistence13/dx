/* eslint-disable import/no-import-module-exports */
import express from 'express';
// const serverless = require("serverless-http");
// eslint-disable-next-line import/no-extraneous-dependencies
import serverless from 'serverless-http';
import cors from 'cors';

// eslint-disable-next-line import/no-import-module-exports
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

const app = express();
// app.use(cors());
// app.use(
//   cors({
//     origin: ['*'],
//   }),
// );
app.options('*', cors()); // include before other routes

app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from DALL.E!',
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();

// const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    hello: 'hi!',
  });
});

app.use('/.netlify/functions/api', router);

// module.exports = app;
// module.exports.handler = serverless(app);
