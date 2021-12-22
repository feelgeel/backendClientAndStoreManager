const express = require("express");
const grosseries = require("./routes/grossery/grosseries");
const grossery = require("./routes/grossery/grossery");
const listNames = require("./routes/listNames");

const Products = require("./routes/Products");
const Byu = require("./routes/Byu");
const storeStock = require("./routes/StoreStock");
const store_transaction = require("./routes/store_transaction");
const store_transaction_prod = require("./routes/store_transaction_prod");
const users = require("./routes/users");
const user = require("./routes/user");
const auth = require("./routes/auth");
const my = require("./routes/my");
const  bodyParser = require('body-parser')
const messages = require("./routes/messages");
const expoPushTokens = require("./routes/expoPushTokens");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

const config=require("./startup/db");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(compression());

app.use("/api/grossery", grossery);
app.use("/api/grosseries", grosseries);
app.use("/api/listNames", listNames);

app.use("/api/st_trans", store_transaction);
app.use("/api/st_trans_prod", store_transaction_prod);
app.use("/api/products", Products);
app.use("/api/byu", Byu);
app.use("/api/storeStock", storeStock);
app.use("/api/user", user);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/my", my);
app.use("/api/expoPushTokens", expoPushTokens);
app.use("/api/messages", messages);

const port = process.env.PORT || 9000
app.listen(port, function() {
  console.log(`Server started on port ${port}...`);
});
