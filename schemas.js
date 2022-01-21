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
          title: "Nombre de la empresa",
          fetch: "businesstitle",
          type: "string"
      },
    ]
  },
 
};
