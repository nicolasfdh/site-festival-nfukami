const filters = document.getElementsByClassName("filter");
let current = document.getElementsByClassName("active");

drawTimetable(current[0].classList[1]);

for (let e of filters) {
  e.addEventListener("click", function () {
    current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    document.getElementById("timetable").innerHTML = "";
    drawTimetable(current[0].classList[1]);
  });
}

function drawTimetable(day) {
  let timetable = new Timetable();

  // On dessine une nouvelle grille selon le jour.
  // Utilisez le nom de classe attribuée à chaque jour pour donner la condition
  if (day == "vendredi") {
    // Définir les heures de la grille (heure de début, heure de fin).
    timetable.setScope(10, 00);

    // Définir les lieux de la grille.
    timetable.addLocations([
      "Le Romandie",
      "El Lokal",
      "Bad Bonn",
      "Rote Fabrik",
    ]);

    // Premier événement:

    timetable.addEvent(
      // Artiste
      "Purple Mountains",
      // Lieu
      "El Lokal",
      // Date et heure de début (année, mois, jour, heure, minute)
      new Date(2020, 10, 17, 11, 20),
      // Date et heure de fin (année, mois, jour, heure, minute)
      new Date(2020, 10, 17, 13, 00),
      // URL Quand on clicke sur le lien
      { url: "../artiste.html" }
    );

    // Deuxième événement
    timetable.addEvent(
      "Bruce Springsteen",
      "Bad Bonn",
      new Date(2020, 10, 17, 13, 00),
      new Date(2020, 10, 17, 15, 45),
      { url: "../artiste.html" }
    );

    let renderer = new Timetable.Renderer(timetable);
    renderer.draw(".timetable");
  }
  // Deuxième jour
  else if (day == "samedi") {
    timetable.setScope(10, 00);
    timetable.addLocations(["Les Docks", "Le Bourg", "PTR", "Fri-Son"]);

    timetable.addEvent(
      "Booba",
      "Le Bourg",
      new Date(2020, 10, 17, 10, 20),
      new Date(2020, 10, 17, 15, 30),
      { url: "../artiste.html" }
    );

    timetable.addEvent(
      "Aphex Twin",
      "PTR",
      new Date(2020, 10, 17, 18, 30),
      new Date(2020, 10, 17, 19, 45),
      { url: "../artiste.html" }
    );
    let renderer = new Timetable.Renderer(timetable);
    renderer.draw(".timetable");
  }
  // Troisième jour
  else if (day == "dimanche") {
    timetable.setScope(10, 00);
    timetable.addLocations(["Les Docks", "Le Bourg", "PTR", "Fri-Son"]);
    timetable.addEvent(
      "The Mountain Goats",
      "Le Bourg",
      new Date(2020, 10, 17, 11, 00),
      new Date(2020, 10, 17, 12, 00),
      { url: "../artiste.html" }
    );
    timetable.addEvent(
      "James McMurtry",
      "PTR",
      new Date(2020, 10, 17, 14, 00),
      new Date(2020, 10, 17, 15, 00),
      { url: "../artiste.html" }
    );
    let renderer = new Timetable.Renderer(timetable);
    renderer.draw(".timetable");
  }
}
