import express from 'express';
import morgan from 'morgan';
import { engine as handlebars } from 'express-handlebars';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url); // Tạo __filename
const __dirname = path.dirname(__filename); // Tạo __dirname

app.use(express.static(path.join(__dirname,'public')))

app.use(morgan('combined'));

app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
