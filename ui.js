class UI {
    static addFilmToUI(newFilm) {
        //console.log(newFilm);
        //eklenecek tablo satırının yapısı:
        // <tr>
        //     <td><img src="" class="img-fluid img-thumbnail"></td>
        //     <td></td>
        //     <td></td>
        //     <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
        // </tr>

        //console.log(filmList);
        const filmList = document.getElementById("films");

        filmList.innerHTML += `
            <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
            </tr>
        `

    }

    static clearInputs(element1, element2, element3) {
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }

    static showMessage(message, type) {
        const cardbody = document.querySelector(".card-body");

        const div = document.createElement("div");
        div.classList = `alert alert-${type}`;
        div.textContent = message;

        cardbody.appendChild(div);

        setTimeout(function () {
            div.remove();
        }, 1500);

    }

    static loadAllFilms(films) {    //Storagetaki tüm filmleri arayüze ekler 
        films.forEach(film => {
            this.addFilmToUI(film);
        });
    }

    static deleteSelectedFilmUI(element) { 
        element.parentElement.parentElement.remove();
    }

    static clearAllFilmsUI() { //Arayüzdeki tüm filmleri siler

        let films = document.querySelector("#films");

        while (films.firstElementChild !== null) {
            films.firstElementChild.remove();
        }
    }

}



