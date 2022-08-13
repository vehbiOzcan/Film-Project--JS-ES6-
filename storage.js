class Storage {
    static addFilmToStorage(newFilm) {
        console.log(newFilm);
        //storage içeriğini alıyor
        let films = this.getFilmsFromStorage();

        //Yeni filmi ekleme
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));

    }

    static getFilmsFromStorage() {//Storage tan filmleri çeker

        let films;
        //films dizisi nullsa oluşturuyor doluysa veya oluşmuşsa içeriğini alıyor
        if (localStorage.getItem("films") === null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }

    static deleteSelectedFilmStorage(filmTitle) {
        let films = this.getFilmsFromStorage();
        films.forEach((film, index) => {
            if (film.title === filmTitle) {
                films.splice(index, 1);
            }
        });
        localStorage.setItem("films", JSON.stringify(films));
    }

    static clearAllFilmsStorage() {
        localStorage.removeItem("films");
    }

}

