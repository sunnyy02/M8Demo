define(function (require) {
    "use strict";

    var ko = require('knockout');
    var Logger = require('./Logger');

    var obj = {
        add: add,
        set: set,
        get: get,
        exists: exists,
        remove: remove,

        items: {}
    };

    function add(key, value) {
        if (!(key in obj.items))
            obj.items[key] = value;
        else
            Logger.logError('Key already exists in application state.', key, 'state');
    }

    function set(key, value) {
        obj.items[key] = value;
    }

    function get(key) {
        if (obj.items[key] !== undefined)
            return obj.items[key];
        else
            Logger.logError('Unable to find key in State.', { key: key, state: obj.items }, 'State');
    }

    function exists(key) {
        return obj.items[key] !== undefined;
    }

    function remove(key) {
        obj.items[key] = undefined;
    }

    return obj;
});