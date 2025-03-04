import axios from "axios";
import { HOST_NAME } from "../utils/constants";
import Cookies from "js-cookie";

export const getAllComponentsCollections = (filters?: any) => {
  return new Promise<any>((resolve, reject) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/component-collection?search=${
        filters?.searchBy || ""
      }&page=${filters?.page || 1}&pageSize=${filters?.pageSize || 25}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("jstoken")}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        resolve(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};
