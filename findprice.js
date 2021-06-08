var mongoClient = require('mongodb');
var url = "mongodb://localhost:27017/";

module.exports = {
    findprice(value){
        return new Promise(function(resolve,reject){
            mongoClient.connect(url,function(err,connection){
                if(err){
                    reject(err);
                }
                var mongodb= connection.db('fruits');
                var collection = mongodb.collection('project');
                let data =[];
                collection.find({price: value.price}).forEach(function(x,index){
                      //console.log(x);
                      console.log(x);
                      data.push(x);
                      setTimeout(function(){
                          resolve(data);
                      },2000);
                }).catch(function(err){
                    reject(err);
                });
            });
        });
    }
} 