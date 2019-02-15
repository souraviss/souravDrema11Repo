const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();


app.listen(8100,()=>{
    console.log('Server Started!.. in this port');
})

app.use(bodyparser.json()); 

var corsOptions={
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};

app.use(cors(corsOptions));



//get Category Route
app.route('/api/category').get((req,res)=>{
    res.send({
        cats:[{name:'category1'},{name:'category2'}]
    });
});
//get catgory Route with dynamic string
app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.send({ name: requestedCatName });
  });

  //create a New category
app.route('/api/category').post((req,res)=>{
res.send(201,req.body);
});
//update category by its name
app.route('/api/category/:name').put((req, res) => {
    res.send(200, req.body);
  });
//delete category by its name
  app.route('/api/category/:name').delete((req, res) => {
    res.sendStatus(204);
  });






