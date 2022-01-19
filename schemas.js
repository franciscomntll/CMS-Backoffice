export const schemasForForms = {
  business: {
    endpoint : () => console.log("hola mundo"),
    schema : [
        {
            title: "Nombre de la empresa",
            fetch: "businessName",
            type: "string"
        },
        {
            title: "Nombre de la empresa1",
            fetch: "businessName",
            type: "string"
        },
        {
            title: "Nombre de la empresa2",
            fetch: "businessName",
            type: "string"
        }
    ]
  },
 
};
