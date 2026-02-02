const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};
const mysql = require('mysql');

const names = [
  'João',
  'Maria',
  'José',
  'Ana',
  'Carlos',
  'Paula',
  'Pedro',
  'Lucia',
];

const createTableSql = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL)`;
const connection = mysql.createConnection(config);
connection.query(createTableSql);
connection.end();

app.get('/', (req, res) => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const insertSql = `INSERT INTO people(name) values('${randomName}')`;
  const connection = mysql.createConnection(config);
  connection.query(insertSql, (err) => {
    if (err) {
      res.status(500).send('Erro ao inserir no banco');
      connection.end();
      return;
    }
    connection.query('SELECT * FROM people', (err, results) => {
      if (err) {
        res.status(500).send('Erro ao consultar o banco');
        connection.end();
        return;
      }
      let html = '<h1>Full Cycle Rocks!</h1><ul>';
      results.forEach((person) => {
        html += `<li>${person.name}</li>`;
      });
      html += '</ul>';
      res.send(html);
      connection.end();
    });
  });
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
});
