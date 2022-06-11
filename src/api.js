const axios = require('axios');

const fetchUsers = async()=>{
  const response = await axios.get('https://www.acme-api.com/api/users');
  return response.data.users; 
}

const fetchUser = async(id)=>{
  const url = `https://www.acme-api.com/api/users/detail/${id}`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = {
  fetchUsers,
  fetchUser
};
