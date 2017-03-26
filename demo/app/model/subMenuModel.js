define([
    'knockout',
    'services/logger',
    'model/productModel'
],
    function (ko, logger, productModel) {
        var subMenuModel = function (fields) {
            var self = this;
            //properties
            this.Code = ko.observable('')
            this.Name = ko.observable('');
            this.ProductsCollection = ko.observableArray();

            this.mapToModel(fields);
        };

        subMenuModel.prototype.mapToModel = function (fields) {
            var self = this;
            logger.log("mapToModel", fields, "subMenuModel", true);
            this.Code(fields.Code);
            this.Name(fields.Name);
            if (fields.Products) {
                fields.Products.forEach(function (product) {
                    var model = new productModel(product);
                    self.ProductsCollection.push(model);
                });
            }
        };
        return subMenuModel;
    });