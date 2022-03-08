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
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_redux_2 = require("react-redux");
const react_bootstrap_1 = require("react-bootstrap");
const memberReducer_1 = require("../features/memberReducer");
function Members() {
    const dispatch = (0, react_redux_1.useDispatch)();
    const [membersList, setMembersList] = (0, react_1.useState)([]);
    (0, react_redux_2.useSelector)((state) => setMembersList(state.members.value));
    (0, react_1.useEffect)(() => {
        dispatch({
            type: "apiCall",
            payload: {
                url: "/member/all",
                method: "get",
                data: {},
                onSuccess: memberReducer_1.memberList.type,
            },
        });
    });
    const listView = () => {
        return membersList.map((m, i) => {
            return (<tr>
          <td>{i + 1}</td>
          <td>
            <img src={m.img} width='24px' height={"24px"}/>
          </td>
          <td>{m.name}</td>
          <td>{m.age}</td>
          <td>{m.nationality}</td>
          <td>
            <button className='btn btn-primary'>Edit</button>
          </td>
          <td>
            <button className='btn btn-delete'>Delete</button>
          </td>
        </tr>);
        });
    };
    return (<div className='container'>
      <react_bootstrap_1.Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Pic</th>
            <th>Name</th>
            <th>Age</th>
            <th>Nationality</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{listView()}</tbody>
      </react_bootstrap_1.Table>
    </div>);
}
exports.default = Members;
//# sourceMappingURL=mermbers.js.map