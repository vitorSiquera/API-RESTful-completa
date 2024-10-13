const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');


dotenv.config();

const app = express();


app.use(express.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));


app.use('/api/auth', authRoutes);

app.use((req, res, next) => {
  console.log(`Recebendo ${req.method} na URL: ${req.url}`);
  next();
});

// Rotas básicas
app.get('/', (req, res) => {
  res.send('API Running');
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
