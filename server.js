const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/dynamic', (req, res) => {
    res.render('dynamic', { 
        title: 'Dynamic Page', 
        message: 'On the static page I said a few words about me and WEC. And here I will add photo of Formula 1.'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
