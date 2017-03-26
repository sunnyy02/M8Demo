define([
    'knockout',
    'services/logger',
    'model/subMenuModel'
],
    function (ko, logger, subMenuModel) {
        var menuModel = function (fields) {
            var self = this;
            //properties
            this.Code = ko.observable('')
            this.Name = ko.observable('');
            this.Logo = null;
            this.SubMenuCollection = ko.observableArray();
            this.ElementId = '';

            this.mapToModel(fields);
    };

    menuModel.prototype.mapToModel = function (fields) {
        var self = this;
        logger.log("mapToModel", fields, "menuModel", true);
        this.Code(fields.Code);
        this.Name(fields.Name);
        this.Logo = fields.Logo;
        this.ElementId = fields.Code.replace('.','');

        if (fields.SubMenus) {
            fields.SubMenus.forEach(function (subMenu) {
                var model = new subMenuModel(subMenu);
                self.SubMenuCollection.push(model);
            });
        }
    };
    return menuModel;
});