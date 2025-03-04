import axios from "axios";
import Cookies from "js-cookie";
import { HOST_NAME } from "../utils/constants";

export const createList = async (data: any) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/user-item`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jstoken")}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        resolve(response?.data?.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
export const updateList = async (data: any) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/user-item`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jstoken")}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        resolve(response?.data?.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export const deleteListById = async (data: any) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/user-item`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jstoken")}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        resolve(response?.data?.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export const updateListById = async (data: any) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/user-item`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jstoken")}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        resolve(response?.data?.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export const getUserListings = (filters?: any) => {
  return new Promise<any>((resolve, reject) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/user-item/${filters?.userId}`,
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
