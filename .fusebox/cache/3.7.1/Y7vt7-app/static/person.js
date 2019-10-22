module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Person {\n    constructor(firstname, lastname, age, adress, cityBirth) {\n        this._firstname = firstname;\n        this._lastname = lastname;\n        this._age = age;\n        this._adress = adress;\n        this._cityBirth = cityBirth;\n    }\n    get firstname() {\n        return this._firstname;\n    }\n    set firstname(firstname) {\n        this._firstname = firstname;\n    }\n    get lastname() {\n        return this._lastname;\n    }\n    set lastname(lastname) {\n        this._lastname = lastname;\n    }\n    get age() {\n        return this._age;\n    }\n    set age(age) {\n        this._age = age;\n    }\n    get adress() {\n        return this._adress;\n    }\n    set adress(adress) {\n        this._adress = adress;\n    }\n    get cityBirth() {\n        return this._cityBirth;\n    }\n    set cityBirth(cityBirth) {\n        this._cityBirth = cityBirth;\n    }\n    toString() {\n        return 'firstname:' + this._firstname + ' | lastname:' + this._lastname + ' | age:' + this.age + ' | adress:' + this._adress + ' | cityBirth:[ ' + this._cityBirth.toString() + ' ]';\n    }\n}\nexports.Person = Person;\n",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1571563689479,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
