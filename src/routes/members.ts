import express from "express";
import { Request, Response } from "express";
import { memberModel } from "../models/members";
import multerParser from "../config/cloudinary";
const router: express.Router = express.Router();

router.get("/all", async (req: Request, res: Response) => {
  console.log("called");
  const allMembers = await memberModel.find({});
  res.json({ members: allMembers });
});

router.post("/add-member", multerParser.single("image"), async (req, res) => {
  const { name, age, nationality } = req.body;
  let member = new memberModel({
    id: Date.now(),
    name,
    age,
    nationality,
    img: req.file.path,
  });
  try {
    const newMember = await member.save();
    res.json({ member: newMember });
  } catch (e) {
    res.status(504).send(e);
  }
});

router.put("/update", async (req, res) => {
  console.log(req.body);
  const { id, name, age, nationality } = req.body;

  let member = await memberModel.findOne({ id });

  if (member) {
    member.name = name;
    member.age = age;
    member.nationality = nationality;
    try {
      const updatedinfo = await member.save();
      res.json({ member: updatedinfo, msg: "User Information Updated" });
    } catch (e) {
      res.status(504).send(e);
    }
  } else {
    res.status(401).send("user not found");
  }
});

router.put("/update-image", multerParser.single("image"), async (req, res) => {
  const { id } = req.body;
  let member = await memberModel.findOne({ id });

  if (member) {
    member.img = req.file.path;
    try {
      const updatedinfo = await member.save();
      res.json({ member: updatedinfo, msg: "Image Uploaded SuccessFully" });
    } catch (e) {
      res.status(504).send(e);
    }
  } else {
    res.status(401).send("user not found");
  }
});

router.delete("/delete-member", async (req, res) => {
  const { id } = req.body;
  try {
    await memberModel.deleteOne({ id });
    res.json({ msg: "User Deleted Successfully" });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post(
  "/upload",
  multerParser.single("image"),
  (req: any, res: Response) => {
    console.log(req.file);
    res.send(req.file.path);
  }
);

export default router;
