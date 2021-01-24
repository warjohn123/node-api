const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.options('*', cors());

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000');
})