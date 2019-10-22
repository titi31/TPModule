module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Product {\n    constructor(name, description, quantity, price) {\n        this.id = Product._id++;\n        this._name = name;\n        this._description = description;\n        this._quantity = quantity;\n        this._price = price;\n    }\n    get name() {\n        return this._name;\n    }\n    set name(name) {\n        this._name = name;\n    }\n    get description() {\n        return this._description;\n    }\n    set description(description) {\n        this._description = description;\n    }\n    get quantity() {\n        return this._quantity;\n    }\n    set quantity(quantity) {\n        this._quantity = quantity;\n    }\n    get price() {\n        return this._price;\n    }\n    set price(price) {\n        this._price = price;\n    }\n    toString() {\n        return 'id:' + this.id + ' | name:' + this._name + ' | description:' + this._description + ' | quantity:' + this._quantity + ' | price:' + this._price;\n    }\n}\nexports.Product = Product;\nProduct._id = 0;\n",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1571579944425,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
