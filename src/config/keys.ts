import productionKeys from "./productionsKey";
import devkeys from "./devKeys";
let keys: any;
if (process.env.NODE_ENV === "production") {
  keys = productionKeys;
} else {
  keys = devkeys;
}

export default keys;
