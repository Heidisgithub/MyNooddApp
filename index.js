const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => res.send('Hello World!'));
function greeting(req, res){
    const object ={
        greeting: "hello again"
    }
    return res.json(object)
}
app.get('/greeting', greeting);

app.listen(port, () => console.log(`Server listening  on port ${port}`));