import axios from "axios";

const API_URL = "http://localhost:5000/api/accounts/";

// Create account
const createAccount = async (accountData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    API_URL + "setAccount",
    accountData,
    config
  );
  return response.data;
};

const accountService = {
  createAccount,
};

export default accountService;
