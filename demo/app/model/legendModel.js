define([
    'knockout',
    'services/logger'
],
    function (ko, logger) {
        var legendModel = function (fields) {
            var self = this;
            //properties
            self.Code = ko.observable('')
            self.Image = null;
            self.Text = ko.observable('')

            this.mapToModel(fields);
        };

        legendModel.prototype.mapToModel = function (fields) {
            var self = this;
            logger.log("mapToModel", fields, "legendModel", true);
            this.Code(fields.Code);
            this.Text(fields.Text);
            this.Image = fields.Image;
        };
        return legendModel;
    });