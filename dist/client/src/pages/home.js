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
class Home extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { abc: "a" };
    }
    render() {
        return (<div className='container'>
        <react_bootstrap_1.Card>
          <react_bootstrap_1.Card.Body>
            <react_bootstrap_1.Row>
              <react_bootstrap_1.Col>
                <div className=' text-center'>
                  <react_bootstrap_1.Button variant='primary'>Members List</react_bootstrap_1.Button>
                </div>
              </react_bootstrap_1.Col>
              <react_bootstrap_1.Col>
                <div className=' text-center'>
                  <react_bootstrap_1.Button variant='primary'>Add Member</react_bootstrap_1.Button>
                </div>
              </react_bootstrap_1.Col>
            </react_bootstrap_1.Row>
          </react_bootstrap_1.Card.Body>
        </react_bootstrap_1.Card>
      </div>);
    }
}
exports.default = Home;
//# sourceMappingURL=home.js.map