import express from 'express';
import morgan from 'morgan';
import { engine as handlebars } from 'express-handlebars';
import { fileURLToPath } from 'url';
import path from 'path';
import route from './routes/index.js';
import { connect } from './config/db/index.js';
import methodOverride from 'method-override';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url); // Tạo __filename
const __dirname = path.dirname(__filename); // Tạo __dirname

connect();

app.use(express.urlencoded({ extended: true })); // Hỗ trợ xử lý form data
app.use(methodOverride('_method')); // Gọi method-override với `_method`

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

// app.use(morgan('combined'));

app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b
    }
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
