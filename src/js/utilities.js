const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NWdxAExdTSbiBb0LbxSy/scores';

const updateDom = (users) => {
  const thead = document.querySelector('#tbody');
  thead.innerHTML = '';
  users.forEach((user) => {
    thead.innerHTML += `<tr class="w-full">
        <td>${user.user}</td>
        <td>${user.score}</td> 
      </tr>`;
  });
};

const insertUsers = async () => {
  const users = await fetchUsers();
  updateDom(users.result);
};

const fetchUsers = async () => {
  let data = await fetch(url);

  return await data.json();
};

export { insertUsers, fetchUsers};
