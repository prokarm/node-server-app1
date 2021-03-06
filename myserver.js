const express =require('express');
const hbs=require('hbs');  //it is on of the template engine used in express
const port = process.env.PORT||3000;
var app = express();//passing express as the function

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

hbs.registerHelper('currentYear',()=>{  //i have register a helper which lets me create a function and lets me use it in a template
                   return new Date().getFullYear();
                   });
//app.use((req,res,next)=>{
//    res.render('maintainance.hbs');
//
//});

app.use(express.static(__dirname+'/playarena')) //use is used to take middleware function

app.get('/', (req,res) => {
    res.render('home.hbs',{             //we are rendering the page so that we can dynamicalyy add or update ti html template
        name:'Karmjeet',
        page:'Home Page'
    });
});

app.get('/playarena', (req,res) => {
    res.send('viewpage.html');
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        currentYear:new Date().getFullYear(),
        name:'Karmjeet'
    });
},(err)=>{console.log('somthing is not right');
});


app.listen(port,()=>{
    console.log(`server is runnig on ${port} Port`);
});
