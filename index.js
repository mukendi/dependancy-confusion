// Importer Express
const express = require('express');
const app = express();
const PORT = 443;

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
    console.log(` Serveur démarré sur https://app-d2b7f9b1-5343-4605-9a68-f61fc68c4471.cleverapps.io/:${PORT}`);
});
