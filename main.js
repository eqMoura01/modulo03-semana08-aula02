



fetch("https://api.github.com/users/eqmoura01")
  .then((response => {
    return response.json();
  }))
  .then((body) => console.log(body))
  .catch((e) => console.log("ERRO"))
  .finally(() => console.log("ACIMA É THEN"));

async function buscaNome() {
  try {
    const response = await fetch("https://api.github.com/users/eqmoura01");
    const body = await response.json();
    console.log(body);

    document.querySelector("#profile-avatar").setAttribute("src", body.avatar_url)
    document.querySelector("#profile-name").innerHTML = body.name

    // Pegando a propriedade LOGIN que veio da api e setando no H1 do HelloVite
    document.querySelector("#helloVite").innerHTML = body.login;
  } catch (error) {
    console.log(error)
  } finally {
    console.log("ACIMA É ASYNC AWAIT")
  }
}

buscaNome()
