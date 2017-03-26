
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
        title: 'Sub Menu',
        dataModel: null,
        constants: constants,
        activate: onActivate,
        goBack: goBack
    };

    return viewModel;

    function onActivate() {
        logger.log("onActivate", null, "", true);

        var self = this;
        self.dataModel = state.get(constants.model.subMenuModel);
    }

    function goBack() {
        router.navigateBack();
    }
});