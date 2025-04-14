const express = require ('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/' , (req, res) =>{
    const blogs =[
        {title: 'Yoshi finds eggs', snippet:'Lorium epsumfyruderh fghde frye'},
        {title: 'Yoshi finds eggs', snippet:'Lorium epsumfyruderh fghde frye'},
        {title: 'Yoshi finds eggs', snippet:'Lorium epsumfyruderh fghde frye'}
    ];
    res.render('index', {title: 'Home', blogs:'blogs'});
});

app.get('/about', (req, res)=>{
    res.render('about', {title: 'About'});
});

app.get('/blogs/create',(req, res)=>{
    res.render('create', {title: 'Create'});
})

app.use((req, res)=>{
    res.status('404').render('error404',{title: 'error'});
});