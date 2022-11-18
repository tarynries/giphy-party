console.log("Let's get this party started!");


const form = document.querySelector('#form');
const submit = document.querySelector('#submit');
const input = document.querySelector('#search')
const imgContainer = document.querySelector('#gif-area')
const remove = document.querySelector('#remove');



form.addEventListener('submit', async function (e) {
    e.preventDefault();

    let searchTerm = input.value;

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "mXS8QKmbP4evRi9092KFgfqOgv6Jcv6P"
        }
    });
    createImg(res.data);
    input.value = "";


});

function createImg(response) {
    let results = response.data.length;
    if (results) {
        let randomImg = Math.floor(Math.random() * results);
        let imageDiv = document.createElement('div');
        imageDiv.classList.add('col-4', 'p-1');
        let img = document.createElement('img');
        img.setAttribute('src', response.data[randomImg].images.original.url);
        img.classList.add('w-100', 'h-100');
        imageDiv.append(img);
        imgContainer.append(imageDiv);
    }
}

remove.addEventListener("click", function (e) {
    console.log(e.target);
    imgContainer.innerHTML = "";
}
)