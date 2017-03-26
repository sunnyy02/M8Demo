define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([
                { route: ['', 'home'],                          moduleId: 'viewModels/home',         title: 'Main Menu',           nav: 1 },
                { route: 'subMenu',                             moduleId: 'viewModels/subMenu',      title: 'Sub Menu',      nav: true }
            ]).buildNavigationModel()
              .mapUnknownRoutes('Home', 'not-found')
              .activate();
        }
    };
});