"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const members_1 = require("../models/members");
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const router = express_1.default.Router();
router.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("called");
    const allMembers = yield members_1.memberModel.find({});
    res.json({ members: allMembers });
}));
router.post("/add-member", cloudinary_1.default.single("image"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, nationality } = req.body;
    let member = new members_1.memberModel({
        id: Date.now(),
        name,
        age,
        nationality,
        img: req.file.path,
    });
    try {
        const newMember = yield member.save();
        res.json({ member: newMember });
    }
    catch (e) {
        res.status(504).send(e);
    }
}));
router.put("/update", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { id, name, age, nationality } = req.body;
    let member = yield members_1.memberModel.findOne({ id });
    if (member) {
        member.name = name;
        member.age = age;
        member.nationality = nationality;
        try {
            const updatedinfo = yield member.save();
            res.json({ member: updatedinfo, msg: "User Information Updated" });
        }
        catch (e) {
            res.status(504).send(e);
        }
    }
    else {
        res.status(401).send("user not found");
    }
}));
router.put("/update-image", cloudinary_1.default.single("image"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    let member = yield members_1.memberModel.findOne({ id });
    if (member) {
        member.img = req.file.path;
        try {
            const updatedinfo = yield member.save();
            res.json({ member: updatedinfo, msg: "Image Uploaded SuccessFully" });
        }
        catch (e) {
            res.status(504).send(e);
        }
    }
    else {
        res.status(401).send("user not found");
    }
}));
router.delete("/delete-member", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield members_1.memberModel.deleteOne({ id });
        res.json({ msg: "User Deleted Successfully" });
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.post("/upload", cloudinary_1.default.single("image"), (req, res) => {
    console.log(req.file);
    res.send(req.file.path);
});
exports.default = router;
//# sourceMappingURL=members.js.map