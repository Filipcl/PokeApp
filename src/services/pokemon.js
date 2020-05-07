export function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
            fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
            });
        }

export async function searchPokemon(url) {
    return new Promise((resolve) => {
            fetch(url).then(res => res.json())
            
            .then(data => {
                resolve(data)
                document.getElementById('Error').innerHTML = null;
            })
            
            .catch(error =>{
                document.getElementById('Error').innerHTML = 'Please enter a valid Pokemon or ID eg number 6';
                document.getElementById('Error').style.color = 'red';
                console.error('Hei',error);
                })
            });
        }