
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //Agrgere una verificacion si la respuesta es exitosa.
  if (!response.ok) {
    throw new Error( `Usuario no encontrado: ${response.statusText}`);

    //pasar la respuesta a Json
const data = await response.json();

  } 
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
} catch (err) {

// manejar errores y mostrar en mensaje eb el dom
  handleError(err);
  }
}

// le quite un mensaje de error por que ya tenia uno, el otro pienso essbaba de mas
function handleError(err) {
  console.log('OH NO!');
  n.textContent = `Algo salió mal: ${err}`
};

displayUser('stolinski').catch(handleError);