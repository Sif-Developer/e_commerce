const express = require("express");
const app = express();
const { typeError } = require('./middleware/errors');
const PORT = 3000;
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.use('/images' ,express.static("./images"));
app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'));
app.use("/users", require('./routes/users'))
app.use('/orders', require('./routes/orders'))


app.use(typeError)

app.listen(PORT, () => {
    console.log('Server successfully started at port ' + PORT);
});
