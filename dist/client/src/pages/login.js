"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
require("firebase/auth");
class Login extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
        this.loginWithGoogle = () => { };
    }
    render() {
        return (<div className='container'>
        <react_bootstrap_1.Card>
          <react_bootstrap_1.Card.Header className='text-center'>
            <span>Login With Google</span>
          </react_bootstrap_1.Card.Header>
          <react_bootstrap_1.Card.Body>
            <div className='text-center'>
              <img src='https://res.cloudinary.com/emerging-it/image/upload/v1644921272/social-media/google_ojzfa1.png' width={"25px"}/>
            </div>
          </react_bootstrap_1.Card.Body>
        </react_bootstrap_1.Card>
      </div>);
    }
}
exports.default = Login;
//# sourceMappingURL=login.js.map