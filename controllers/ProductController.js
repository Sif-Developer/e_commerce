const { Product, Category, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const ProductController = {

  async createProduct(req, res, next) {
    if (req.file) req.body.image = req.file.filename
    try {
      const product = await Product.create({ ...req.body });
      res.send(product);
    } catch (error) {
      console.error(error)
      next(error)
    }
  },

  async updateProductById(req, res) {
    await Product.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send("Product updated successfully");
  },
  
  async deleteProductById(req, res) {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("Product has been deleted successfully");
  },
  getAll(req, res) {

    Product.findAll({

    })

        .then(Products => res.send(Products))

        .catch(err => {

            console.log(err)

            res.status(500).send({ message: 'Error loading categories' })

        })

},

  async getProductById(req, res) {
    Product.findByPk(req.params.id).then((post) => res.send(post));
  },
  async getProductByName(req, res) {
    try {
      const product = await Product.findOne({
        where: {
          name: {
            [Op.like]: `%${req.params.name}%`,
          },
        },
      });
      res.send(product);
    } catch (error) {
      console.error(err);
      res.status(see).send({ msg: "Error searching product by name", err });
    }
  },
  async getProductByPrice(req, res) {
    try {
      const product = await Product.findOne({
        where: {
          price: {
            [Op.like]: `%${req.params.price}%`,
          },
        },
      });
      res.send(product);
    } catch (error) {
      console.error(err);
      res.status(see).send({ msg: "Error searching product by price", err });
    }
  },

  getProductsWithCategories(req, res) {
    Product.findAll({ include: [Category] })
      .then((products) => res.send(products))
      .catch((err) => {
        console.error(err);
        res.send(err);
      });
  },
  getProductsSortered(req, res) {
    Product.findAll({ order: [["price", "DESC"]] })
      .then((products) => res.send(products))
      .catch((err) => {
        console.error(err);
        res.send(err);
      });
  },
  createProductOrder(req, res) {
    Product.create(req.body)
      .then((products) => {
        products.addOrder(req.body.OrderId);
        res.send(products);
      })
      .catch((err) => console.error(err));
  },
};

module.exports = ProductController;
