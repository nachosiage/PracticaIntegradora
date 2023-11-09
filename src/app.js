import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';

import { } from './utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');


//Routers

app.get('/', (req, res) => {
    res.send('Hello from backend');
});

app.use((error, req, res, next) => {
    const message = `Ah ocurrido un error inesperado ☹️: ${error.mensaje}`;
    console.error(message);
    res.status(500).json( {message });
})

export default app;