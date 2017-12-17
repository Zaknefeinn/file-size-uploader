var express = require('express'),
    app     = express(),
    multer  = require('multer'),
    storage = multer.memoryStorage(),
    upload = multer({ storage });
    
app.set('view engine', 'ejs');
    
    
app.get('/', function(req,res){
     res.render('index');
});
app.post('/uploads',upload.single('upload'),function(req,res){
    res.json({'size(bytes)' : req.file.size});
});

app.get('*',function(req,res){
    res.redirect('/');
});

app.listen(process.env.PORT,function(){
    console.log('Listening....');
});