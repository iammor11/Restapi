const mongoose = require("mongoose");
const Fullname = require("../models/fullName");

exports.names_get_all = (req, res, next) => {
    Fullname.find()
      //.select("product quantity _id")
      //.populate("product", "name")
      //.exec()
      .then(docs => {
        res.status(200).json({
         docs,
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  };

exports.names_create_name = (req, res, next) => {
    const fullname = new Fullname({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });
    fullname.save()
        .then(result => {
        console.log(result);
        res.status(201).json({
        message: "Created name successfully",
        createdProduct: {
        result
        }
    });
    })
    .catch(err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
    });
};

exports.orders_get_order = (req, res, next) => {
    Fullname.findById(req.params._id)
      //.populate("product")
      .exec()
      .then(docs => {
       // if (!order) {
         // return res.status(404).json({
           // message: "Name not found"
          //});
        //}
        res.status(200).json({
          docs,
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  };


  exports.names_update_name = (req, res, next) => {
   Fullname.findByIdAndUpdate({_id: req.params._id}, req.body).then(function(){
        Fullname.findOne({_id: req.params._id}).then(function(ninja){
            res.send(ninja);
        });
    }).catch(next);
};

  exports.orders_delete_order = (req, res, next) => {
    Fullname.findByIdAndDelete({ _id: req.params._id })
    .exec()
    .then(result => {
    res.status(200).json({
        message: "Order deleted",
        result
    });
    })
    .catch(err => {
    res.status(500).json({
        error: err
    });
    });
};

exports.orders_deletes_order = (req, res, next) => {
  Fullname.deleteMany({checked: true})
  .exec()
  .then(result => {
  res.status(200).json({
      message: "Order deleted",
      result
  });
  })
  .catch(err => {
  res.status(500).json({
      error: err
  });
  });
};