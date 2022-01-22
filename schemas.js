export const schemasForForms = {
  business: {
    endpoint: () => console.log("hola mundo"),
    schema: [
      {
        title: "Nombre de la empresa",
        fetch: "title",
        type: "string",
      },
      {
        title: "Imagen de miniatura",
        fetch: "imgMiniatura",
        type: "string",
      },
      {
        title: "Imagen de banner",
        fetch: "imgBanner",
        type: "string",
      },
      {
        title: "Slug",
        fetch: "slug",
        type: "number",
      },
      {
        title: "Descripción",
        fetch: "description",
        type: "image",
      },
    ],
  },
};
