const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = process.env.PORT || 8000
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(require('./routes'));

app.get('/welcome', (req, res) => {
    res.send('Welcome');
});

app.listen(PORT, () => {
    console.log(`Server up on PORT:${PORT}`);
})
