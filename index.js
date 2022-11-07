const express = require("express");
const app = express();
const { typeError } = require('./middleware/errors');
const PORT = 3000;

app.use(express.json())

app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'));
app.use("/users", require('./routes/users'))
app.use('/orders', require('./routes/orders'))


app.use(typeError)

app.listen(PORT, () => {
    console.log('Server successfully started at port ' + PORT);
});
