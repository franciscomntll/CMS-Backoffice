import axios from "axios";
import { api } from "../utils/api";

export class UploadAdapter {
  constructor(loader) {
    this.loader = loader;
    this.loader.file.then((pic) => (this.file = pic));
    this.upload();
  }

  async upload() {
    try {
      if(this.file){
        const fd = new FormData();
        const params = {
          query: `mutation ($file :Upload!){
                  ckeditorUpload(file: $file){
                    default
                    i1024
                    i800
                    i640
                    i320
                  }
                }`,
          variables: {
            file: null,
          },
        };
        const map = { image: ["variables.file"] };
        fd.append("operations", JSON.stringify(params));
        fd.append("map", JSON.stringify(map));
        fd.append("image", this.file); // your image
        
        const {
          data: { data },
        } = await api.GraphQL(fd);
        return Object.values(data)[0];
      }
      
    } catch (error) {
      console.error("Server Error : ", error);
      return "Server Error";
    }
  }
}
