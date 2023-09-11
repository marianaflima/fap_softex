const perfis = document.querySelector(".perfis");

function usersOrigamidAPI() {
    fetch('https://api.github.com/users/origamid/followers')
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i <= data.length; i++) {
            const profile = document.createElement("div");
            profile.classList.add("profile");

            const image = document.createElement("img");
            image.src = data[i].avatar_url;
            profile.appendChild(image)

            const login = document.createElement("h4");
            login.innerText = `${data[i].login}`;
            profile.appendChild(login)

            const id = document.createElement("p")
            id.innerText = `id: ${data[i].id}`;
            profile.appendChild(id);

            perfis.appendChild(profile)
        }
    })
    .catch(err => console.log(err))
}

usersOrigamidAPI()