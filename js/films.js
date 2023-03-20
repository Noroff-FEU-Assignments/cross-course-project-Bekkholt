export const films = [
    {id: 0,
    title: `the addams family`,
    posterSrc: `images/Square_Eyes_Cover6.jpeg`,
    description: `The eccentrically macabre family moves to a bland surburb where Wednesday Addams friendship with the daughter of a hostile and conformist local reality show host exacerbates conflict between the families.`,
    directedBy: `Directed by: Greg Tiernan, Conrad Vernon`,
    featuring: `Featuring: Oscar Isaac, Charlize Theron, Chloë Grace Moretz, Finn Wolfhard and more.`,
    },

    {id: 1,
    title: `batman`,
    posterSrc: `/images/Square_Eyes_Cover7.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},

    {id: 2,
    title: `godzilla king of the monsters`,
    posterSrc: `/images/Square_Eyes_Cover2.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},

    {id: 3,
    title: `hobbs & shaw`,
    posterSrc: `/images/Square_Eyes_Cover1.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},

    {id: 4,
    title: `once upon a time in hollywood`,
    posterSrc: `/images/Square_Eyes_Cover3.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},

    {id: 5,
    title: `scream`,
    posterSrc: `/images/Square_Eyes_Cover4.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},

    {id: 6,
    title: `sweetheart`,
    posterSrc: `/images/Square_Eyes_Cover5.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},

    {id: 7,
    title: `toy story 4`,
    posterSrc: `/images/Square_Eyes_Cover8.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},
]

export function getFilmsIncluding(searchText) {
    const results = films.filter(function(film) {
        const filmTitle = film.title.toLowerCase();
        const inputText = searchText.toLowerCase();
        const including = filmTitle.includes(inputText);
        return including;
    });
    return results;
}

export function getFilmByID(id) {
    const getFilmsFromID = films.find(film => film.id == id)
    return getFilmsFromID
};