"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const app_1 = __importDefault(require("firebase/app"));
require("firebase/auth");
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaIMsjxhpSgBKf7k_PAv7UpSdwX-XS93k",
    authDomain: "task-a1734.firebaseapp.com",
    projectId: "task-a1734",
    storageBucket: "task-a1734.appspot.com",
    messagingSenderId: "951395374670",
    appId: "1:951395374670:web:036909483087510538551f",
    measurementId: "G-6EX7XKT229",
};
app_1.default.initializeApp(firebaseConfig);
exports.auth = app_1.default.auth();
//# sourceMappingURL=firebase-config.js.map