import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

const handleHome = (req, res) => res.send('Hello from Home');

const handleProfile = (req, res) => res.send('You are on my profile');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
