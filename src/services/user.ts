import axios from "axios";
import { HOST_NAME } from "../utils/constants";
import Cookies from "js-cookie";

export const updateUserDetails = async (data: any) => {
  try {
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/user`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jstoken")}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    return response?.data;
  } catch (error) {
    return error;
  }
};
export const deleteUserAccount = async (data: any) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/delete-user/${data?.userId}`,
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
      .catch((error) => {
        reject(error);
      });
  });
};

export const getUserById = async (id: string) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/user/${id}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("jstoken")}`,
      },
    };

    const res = await axios.request(config);
    return res?.data;
  } catch (error) {
    return error;
  }
};
export const getUserByToken = async (token: string) => {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/verify-user`,
      headers: {
        Authorization: `Bearer ${Cookies.get("jstoken")}`,
      },
      data: { token },
    };

    const res = await axios.request(config);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const subscribeUserToNewsletter = async (data: any) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/newsletter`,
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
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateSubscriptionPreview = async (data: any) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/subscription/update-preview`,
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
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateSubscription = async (data: any) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/subscription/update`,
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
      .catch((error) => {
        reject(error);
      });
  });
};

export const cancelUserSubscription = async (data: any) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/subscription/cancel`,
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
      .catch((error) => {
        reject(error);
      });
  });
};
export const getTransactionIvoice = async (paddleTransactionId: any) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${HOST_NAME}/transaction/${paddleTransactionId}/invoice`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jstoken")}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        resolve(response?.data?.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
