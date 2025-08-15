// Importer Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour parser le JSON reçu dans le corps de la requête
app.use(express.json());

// Route GET

app.get('/api/data', (req, res) => {

    const data = req.query.name;

    if (!data) {
        return res.status(400).json({ error: 'Veuillez fournir un paramètre name' });
    }
    res.status(200).json({
        message : `Bonjour ${data}`,
        data : new Date()
    });
})


// Démarrer le serveur
app.listen(PORT, () => {
    console.log(` Serveur démarré sur http://localhost:${PORT}`);
});
