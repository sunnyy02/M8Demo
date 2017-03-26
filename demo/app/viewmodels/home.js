
    define(['durandal/app', 
        'durandal/system',
        'plugins/router', 
        'services/logger', 
        'services/constants', 
        'services/state',
        'model/mainModel',
        'knockout'],
    function (app, 
        system,
        router, 
        logger, 
        constants, 
        state,
        mainModel,
        ko) {

    var name = ko.observable();

    viewModel = {
        title: 'Client Profile',
        dataModel: null,
        constants: constants,
        activate: onActivate,
        goSubMenu: goSubMenu
    };

    return viewModel;

    function onActivate() {
        logger.log("onActivate", null, "", true);

        var self = this;
    }

    function goSubMenu(data) {
        var self = this;
        router.navigate("#subMenu");
    }
});