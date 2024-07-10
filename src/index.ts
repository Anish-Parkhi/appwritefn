import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({
    msg: 'Jai Babaji',
  });
});

app.get('/api', (req, res) => {
  res.json({
    msg: 'API is working',
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
