module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst person_1 = require(\"./person\");\nclass Employee extends person_1.Person {\n    constructor(firstname, lastname, age, adress, cityBirth, company, salary, cityWork) {\n        super(firstname, lastname, age, adress, cityBirth);\n        this._company = company;\n        this._salary = salary;\n        this._cityWork = cityWork;\n    }\n    get company() {\n        return this._company;\n    }\n    set company(company) {\n        this._company = company;\n    }\n    get salary() {\n        return this._salary;\n    }\n    set salary(salary) {\n        this._salary = salary;\n    }\n    get cityWork() {\n        return this._cityWork;\n    }\n    set cityWork(cityWork) {\n        this._cityWork = cityWork;\n    }\n    toString() {\n        return super.toString() + ' | company:' + this._company + ' | salary:' + this._salary + ' | cityWork:[ ' + this._cityWork + ' ]';\n    }\n}\nexports.Employee = Employee;\n",
dependencies: ["./person"],
sourceMap: {},
headerContent: undefined,
mtime: 1571563649000,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
