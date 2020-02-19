const Pool = require('pg').Pool;

const db = new Pool({
  user: 'postgres',
  password: 'masterkey',
  host: 'localhost',
  port: 5432,
  database: 'doe',
});

exports.get = (req, res) => {
  db.query('select * from donors', (err, result) => {
    if(err) {
      return res.send('Erro ao Conectar com o Banco de Dados!');
    };
    const donors = result.rows;
    return res.render('index', { donors });
  });
};

exports.post = (req, res) => {
  const { name, email, blood} = req.body;

  const query = 
    `INSERT INTO donors ("name", "email", "blood") 
    VALUES ($1, $2, $3)`;
  const values = [name, email, blood];

  db.query(query, values, (err) => {
    if (err) {
      return res.send('Erro ao Conectar com o Banco de Dados!');
    };

    return res.redirect('/');
  });  
};