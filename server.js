    var express = require('express');  
    var path = require("path");   
    var bodyParser = require('body-parser');  
    var mongo = require("mongoose");  
      
    var db = mongo.connect("mongodb://localhost:27017/crud-netflix", function(err, response){  
       if(err){ console.log( err); }  
       else{ console.log('Connected to ' + db, ' + ', response); }  
    });  
      
       
    var app = express()  
    app.use(bodyParser());  
    app.use(bodyParser.json({limit:'5mb'}));   
    app.use(bodyParser.urlencoded({extended:true}));  
       
      
    app.use(function (req, res, next) {        
         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
         res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
         res.setHeader('Access-Control-Allow-Credentials', true);       
         next();  
     });  
      
    var Schema = mongo.Schema;  
      
    var TvShowSchema = new Schema({      
     nome: { type: String   },       
     descricao: { type: String   },   
    },{ versionKey: false });  
       
      
    var model = mongo.model('tvShows', TvShowSchema, 'tvShows');  
      
    app.post("/api/SaveTvShow",function(req,res){   
     var mod = new model(req.body);  
     if(req.body.mode =="Save")  
     {  
        mod.save(function(err,data){  
          if(err){  
             res.send(err);                
          }  
          else{        
              res.send({data:"Record has been Inserted..!!"});  
          }  
     });  
    }  
    else   
    {  
     model.findByIdAndUpdate(req.body.id,  {nome: req.body.nome, descricao: req.body.descricao},  
       function(err,data) {  
       if (err) {  
       res.send(err);         
       }  
       else{        
              res.send({data:"Record has been Updated..!!"});  
         }  
     });  
      
      
    }  
     })  
      
     app.post("/api/deleteTvShow",function(req,res){      
        model.remove({ _id: req.body.id }, function(err) {    
         if(err){    
             res.send(err);    
         }    
         else{      
                res.send({data:"Record has been Deleted..!!"});               
            }    
     });    
       })  
      
      
      
     app.get("/api/getTvShow",function(req,res){  
        model.find({},function(err,data){  
                  if(err){  
                      res.send(err);  
                  }  
                  else{                
                      res.send(data);  
                      }  
              });  
      })  
      
      
    app.listen(8080, function () {  
        
     console.log('Example app listening on port 8080!')  
    })  