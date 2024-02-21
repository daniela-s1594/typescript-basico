import _ from "lodash";
const data = [
  {
    username: "nico",
    role: "admin",
  },
  {
    username: "manu",
    role: "seller",
  },
  {
    username: "silva",
    role: "admin",
  },
  {
    username: "maria",
    role: "seller",
  },
  {
    username: "juan",
    role: "admin",
  },
  {
    username: "fabian",
    role: "seller",
  },
  {
    username: "lina",
    role: "seller",
  },
  {
    username: "lorena",
    role: "costumer",
  }
];
const rta =_.groupBy(data,(item)=>item.role);

console.log(rta);
