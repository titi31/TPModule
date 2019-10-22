module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Town {\n    constructor(city, country, nbHabitants) {\n        this._city = city;\n        this._country = country;\n        this._nbHabitants = nbHabitants;\n    }\n    get city() {\n        return this._city;\n    }\n    set city(city) {\n        this._city = city;\n    }\n    get country() {\n        return this._country;\n    }\n    set country(country) {\n        this._country = country;\n    }\n    get nbHabitants() {\n        return this._nbHabitants;\n    }\n    set nbHabitants(nbHabitants) {\n        if (nbHabitants < 0) {\n            console.log('not number negatif');\n        }\n        else {\n            this._nbHabitants = nbHabitants;\n        }\n    }\n    toString() {\n        return 'city:' + this._city + ' | country:' + this._country + ' | nbHabitants:' + this._nbHabitants;\n    }\n}\nexports.Town = Town;\n",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1571564532280,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
