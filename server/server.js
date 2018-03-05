// Package import
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();

// Local import
const Contact = require('./formModel');

// Init variable
const app = express();

// le .use c'est quand on utilise un middleware
// (une fonction qui se met entre la requete et le traitement de la requete)
app.use(bodyParser.json()); // pour pouvoir parser un format json

// ajoute deux instructions dans le header de la réponse su server
// permet de faire des requetes API
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const formValidator = (req, res, next) => {
  const isNoSqlInjected = (item) => {
    const contentFormat = /^((?!{).).*|((?!}).)$/;
    const itemFormatted = item.replace(/(\s+)/g, '');
    const find = itemFormatted.search(contentFormat);
    return find;
  };

  if (req.body.form) {
    const payLoad = Object.values(req.body.form);
    const result = payLoad.map(item => isNoSqlInjected(item));

    async function test() {
      try {
        const resultat = await result.indexOf(-1);
        return resultat;
      }
      catch (error) {
        console.log(error);
      }
    }

    test().then((result) => {
      if (result > -1) {
        console.log('form was not validate');
        res.send({ message: 'false' });
      }
      else {
        console.log('form was validate');
        next();
      }
    });
  }
  else {
    next();
  }
};

app.use('/form-submit', formValidator);

app.post('/form-submit', (req, res) => {
  console.log(req.body.form);
  const { name, email, message } = req.body.form; // req.body grâce à body parser
  // paramètre de connexion
  const mongoDB = `mongodb://vincent:${process.env.DB_PASS}@ds255958.mlab.com:55958/portfoliosydney`;
  mongoose.connect(mongoDB, {
    useMongoClient: true,
  });
  // lancer et stocker la connexion
  const db = mongoose.connection;
  // tester la connexion
  db.on('error', console.error.bind(console, 'mongoDB connection error: '));
  db.once('open', () => {
    console.log('Youpi, Connected to the DB');
  });

  const newContact = new Contact({
    name,
    email,
    message,
  });
  newContact.save((err, savedContact) => {
    if (err) {
      console.error(err);
      return err;
    }
    console.log(savedContact);
    res.send({ message: 'true' });
  });
});


app.listen(3000, () => {
  console.log('App is running');
});
