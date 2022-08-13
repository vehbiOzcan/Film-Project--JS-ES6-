const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearFilms = document.querySelector("#clear-films");


eventListener();

//Tüm eventleri yükleme
function eventListener() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    secondCardBody.addEventListener("click", deleteSelectedFilm)
    clearFilms.addEventListener("click", deleteAllFilms);
}

function addFilm(e) {
    //inputların içeriğini alma
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;



    if (title == "" || director == "" || url == "") {
        UI.showMessage("Tüm alanları doldurunuz !", "danger");
    } else {
        //Yeni Film oluşturma
        const newFilm = new Film(title, director, url);
        //Filmi arayüze ekleme
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.showMessage(title + " filmlerim listesine eklendi", "success");
    }
    //input içeriklerini silme
    UI.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}

function deleteSelectedFilm(e) {
    let element = e.target;

    if (element.id === "delete-film") {
        let filmTitle = element.parentElement.previousElementSibling.previousElementSibling.textContent;
        UI.deleteSelectedFilmUI(element);
        Storage.deleteSelectedFilmStorage(filmTitle);
        UI.showMessage(filmTitle + " listeden silindi.", "success");
    }

}

function deleteAllFilms(e) {
    if (confirm("Tüm filmleri silmek istediğinize emin misiniz?")) {
        UI.clearAllFilmsUI();
        Storage.clearAllFilmsStorage();
    }
    UI.showMessage("Tüm filmler listeden silindi.", "success");
}