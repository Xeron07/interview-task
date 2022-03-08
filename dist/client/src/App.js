"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const login_1 = __importDefault(require("./pages/login"));
function App() {
    return (<div className='container'>
      <div className='jumbotron'>
        <h1 className='display-4 text-center'>ABC Club</h1>
      </div>
      <login_1.default />
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.js.map