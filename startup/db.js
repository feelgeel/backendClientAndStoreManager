var mongoose = require('mongoose');
const config=require("config");

// const mongo_pass=config.get('mongo_pass');
// const mongoLink=`mongodb://todolist:${mongo_pass}@todolist-shard-00-00.jlhg1.mongodb.net:27017,todolist-shard-00-01.jlhg1.mongodb.net:27017,todolist-shard-00-02.jlhg1.mongodb.net:27017/TODOLIST?ssl=true&replicaSet=atlas-a96urh-shard-0&authSource=admin&retryWrites=true&w=majority`;

// const mongoLink="mongodb://todolist:cisco-dabest@todolist-shard-00-00.jlhg1.mongodb.net:27017,todolist-shard-00-01.jlhg1.mongodb.net:27017,todolist-shard-00-02.jlhg1.mongodb.net:27017/TODOLIST?ssl=true&replicaSet=atlas-a96urh-shard-0&authSource=admin&retryWrites=true&w=majority";
// mongoose.connect(mongoLink, {useNewUrlParser: true,useUnifiedTopology: true });
mongoose.connect('mongodb://localhost/client_management',{useNewUrlParser: true,useUnifiedTopology: true ,useFindAndModify: false })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to client_management"); 
});