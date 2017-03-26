define([
    'knockout',
    'services/logger',
    'model/menuModel'
],
    function (ko, logger, menuModel) {
        var mainModel = function (fields) {
            var self = this;
            //properties
            this.CountryCode = ko.observable('')
            this.Culture = ko.observable('');
            this.StoreNo = ko.observable('');
            this.StoreTime = ko.observable('');
            this.IsDelivery = ko.observable('');

            this.MenuCollection = ko.observableArray();

            this.mapToModel(fields);
        };

        mainModel.prototype.mapToModel = function (fields) {
            var self = this;
            logger.log("mapToModel", fields, "mainModel", true);
            this.CountryCode(fields.CountryCode);
            this.Culture(fields.Culture);
            this.StoreNo(fields.StoreNo);
            this.StoreTime(fields.StoreTime);
            this.IsDelivery(fields.IsDelivery);
            fields.MenuPages.forEach(function (menu) {
                var model = new menuModel(menu);
                self.MenuCollection.push(model);
            });
        };
        return mainModel;
    });