const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const path = require('path');
const sorteioRoutes = require('./routes/sorteio');
const session = require('express-session');
const flash = require('connect-flash');   
const PORT = 8000;

app.use(session({
    secret: 'paodeformafeitoemcasa', // Mude para algo seguro
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', sorteioRoutes);

db.authenticate()
  .then(() => console.log('Conectou ao banco com sucesso'))
  .catch(err => console.log('Erro ao conectar:', err));

db.sync()
  .then(() => console.log('Banco sincronizado'))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
