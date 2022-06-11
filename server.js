const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static('assets'));
app.use('/dist', express.static('dist'));


//creat path here, this is an ablute path
// why we not need next: we don't have errors here, and next especially for a function
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});


const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));


 //watch is similiar to nodemon, this step goes back to the last step: webpack