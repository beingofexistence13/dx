const express = require('express');
const fileUpload = require('express-fileupload');
const pdfParser = require('pdf-parser');


const app = express();
app.use('/', express.static('public'));
app.use(fileUpload());
app.post('/extract-text', (req, res) => {
    if (req.files && req.files.pdfFiles) {
        res.status(400);
        res.end();
    }
    pdfParser(req.files.pdfFile).then(
        result => {
            res.send(resut.text)
        }
    )
})
app.listen(3000);


