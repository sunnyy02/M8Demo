define([
    'knockout',
    'services/logger',
    'model/legendModel'
],
    function (ko, logger, legendModel) {
        var productModel = function (fields) {
            var self = this;
            //properties
            this.Name = ko.observable('');
            this.Description = ko.observable('');
            this.Image = ko.observable('');
            this.Kj = ko.observable('');
            this.Price = null;
            this.Status = ko.observable('');
            this.LinkedItem = null;
            
            this.LegendsCollection = ko.observableArray();

            this.mapToModel(fields);
        };

        productModel.prototype.mapToModel = function (fields) {
            var self = this;
            logger.log("mapToModel", fields, "productModel", true);
            this.Name(fields.Name);
            this.Description(fields.Description);
            this.Image(fields.Image);
            this.Kj(fields.Kj);
            this.Price = fields.Price;
            this.Status(fields.Status);
            this.LinkedItem = fields.LinkedItem;

            if (fields.Legends) {
                fields.Legends.forEach(function (legend) {
                    var model = new legendModel(legend);
                    self.LegendsCollection.push(model);
                });
            }
        };
        return productModel;
    });