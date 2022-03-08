import { model, Schema } from "mongoose";

interface Member {
  id: String;
  name: String;
  img: String;
  age: Number;
  nationality: String;
}

const memberSchema = new Schema<Member>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  img: { type: String, default: "" },
  age: { type: Number, default: 18 },
  nationality: { type: String, default: "" },
});

export const memberModel = model<Member>("members", memberSchema);
