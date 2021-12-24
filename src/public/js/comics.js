const timeStamp = "1640231862"
const apiKey = "10ccdbef1402f6ff37bf3b7848e03d72"
const md5 = "717490d43b52f75fdef19f528f74994a"

fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`)
.then((response)=>{
    return response.json();})
    .then((jsonParsed)=>{
        const divHero = document.querySelector(`#comics`);

        jsonParsed.data.results.forEach(element => {
            const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
            const button = element.title

            createDivHero(srcImage,  divHero, button)
        })

        console.log(jsonParsed)
    })

    function createDivHero(srcImage, divToAppend, button){
        const divPai = document.createElement('div')
        const divFilho = document.createElement('div')
        const img = document.createElement('img')
        const buttonComics = document.createElement('a')

        img.src = srcImage 
        buttonComics.textContent = button

        divFilho.appendChild(img)
        divPai.appendChild(divFilho)
        divFilho.appendChild(buttonComics)
        divToAppend.appendChild(divPai)


        divPai.classList.add('personagem')
        
    }