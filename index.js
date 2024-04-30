import express, { json } from 'express';
const app = express();
const PORT = 3000;
app.use(json());
app.get('/', (req, res) => {
    res.send("<p>index</p>");
});
//route de base pour le reste des route
app.use('/api/exam', require('./route/route').default);

//garde le serveur ouvert
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
}); 