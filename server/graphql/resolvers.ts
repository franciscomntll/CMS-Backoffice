import fs from "fs";

export const resolvers = {
  Query: {
    createSchema(obj, args, context, info) {
      const obj2 = {
        title: "Hola ",
        fields: [{ type: "string", label: "Nombre", field: "nombre" }, { type: "string", label: "Nombre2", field: "nombre2" }],
      };
      const fileName = obj2.title.toLowerCase().trim().replace(" ", "-");
      !fs.existsSync(`server/database/${fileName}`) && fs.mkdirSync(`server/database/${fileName}`)
      fs.writeFileSync(`server/database/${fileName}/schema-${fileName}.json`, JSON.stringify(obj2.fields));
      console.log("creado");
      return "Hello World!";
    },
  },
};
