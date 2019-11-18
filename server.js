const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the ContactKeeper API...' });
});

//Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
