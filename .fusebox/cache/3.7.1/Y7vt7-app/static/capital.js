module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst town_1 = require(\"./town\");\nclass Capital extends town_1.Town {\n    constructor(city, country, nbHabitants, monument) {\n        super(city, country, nbHabitants);\n        this._monument = monument;\n    }\n    get monument() {\n        return this._monument;\n    }\n    set monument(monument) {\n        this._monument = monument;\n    }\n    toString() {\n        return super.toString() + ' | monument:' + this._monument;\n    }\n}\nexports.Capital = Capital;\n",
dependencies: ["./town"],
sourceMap: {},
headerContent: undefined,
mtime: 1571563614823,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
