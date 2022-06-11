let users;
const ul = document.querySelector('#usersList');
const { fetchUsers, fetchUser } = require('./api');

const start = async()=> {
  users = await fetchUsers(); 
  
  renderUsers();
  loadBio();
};

const renderUsers = ()=> {
  const hash = window.location.hash.slice(1);
  const html = users.map( user => {
    return `
      <li ${hash == user.id ? "class='selected'": ""}>
        <a href='#${user.id === hash ? '' : user.id}'>
          ${ user.fullName }
        </a>
      </li>
    `;
  }).join('');
  ul.innerHTML = html;
};

const loadBio = async()=> {
  const hash = window.location.hash.slice(1);
  if(hash){
    const data = await fetchUser(hash);
    const bio = document.querySelector('#bio');
    bio.innerText = data.bio;
  }
  else {
    bio.innerText = '';
  }
}

window.addEventListener('hashchange', async()=> {
  loadBio();
  renderUsers();
  
});

start();