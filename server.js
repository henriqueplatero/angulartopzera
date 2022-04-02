const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + 'dist/angular-dtopzh'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + 'dist/angular-dtopzh/index.html');
});

app.listen(PORT, () => {
    console.log('Server @ port: ' + PORT);
});