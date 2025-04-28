
import express from 'express';
import loginRoutes from './src/routes/loginRoutes';

const app = express();
const PORT = 4000;

app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('¡Bienvenido al portal de SkyTech!');
});


app.use('/api', loginRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



