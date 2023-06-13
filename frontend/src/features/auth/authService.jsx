import axios from "axios";

const userLogin = async (userData) => {
  const { data } = await axios.post("/api/users/auth", userData);
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

const userRegister = async (userData) => {
  const { data } = await axios.post("/api/users/", userData);
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

const userUpdate = async (userData) => {
  const { data } = await axios.put("/api/users/profile", userData);
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

const userLogout = async () => {
  await axios.post("/api/users/logout");
  localStorage.removeItem("user");
};

const authService = {
  userRegister,
  userLogin,
  userLogout,
  userUpdate,
};
export default authService;
