const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = async (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = await Product.create({title:title,price:price,description:description,imageUrl:imageUrl})
    res.redirect('/admin/products');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findAll({where:{id:prodId}})
  .then((product)=>{
    console.log(product);
    if (!product) {
      return res.redirect('/');
    }
    console.log('abc');
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product[0]
    });

  })
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.update({id:prodId,title:updatedTitle,price:updatedPrice,imageUrl:updatedImageUrl,description:updatedDesc},{
    where:{id:prodId}
  })
  .then(()=>{
    res.redirect('/admin/products');
  }) 
};

exports.getProducts =(req, res, next) => {
  Product.findAll()
  .then((products)=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err=>console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.destroy({where:{id:prodId}})
    res.redirect('/admin/products');
};
