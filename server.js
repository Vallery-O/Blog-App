const express = require('express') ;


const app= express();

app.listen(3000);

app.get('/', (req, res) =>{

    res.send('<p> Hey Yall</p>');
});


//yAnGb7bsj7OqwXLp