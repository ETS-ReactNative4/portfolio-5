let express = require('express');
const path = require('path');

let app = express();

app.listen(4000, () => {
    console.log("working on port 4000")
})


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});