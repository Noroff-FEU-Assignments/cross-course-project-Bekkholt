export const films = [
    {title: `the addams family`,
    posterSrc: `images/Square_Eyes_Cover6.jpeg`,
    description: `The eccentrically macabre family moves to a bland surburb where Wednesday Addams friendship with the daughter of a hostile and conformist local reality show host exacerbates conflict between the families.`,
    directedBy: `Directed by: Greg Tiernan, Conrad Vernon`,
    featuring: `Featuring: Oscar Isaac, Charlize Theron, Chloë Grace Moretz, Finn Wolfhard and more.`,
    },

    {title: `batman`,
    posterSrc: `/images/Square_Eyes_Cover7.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},

    {title: `godzilla king of the monsters`,
    posterSrc: `/images/Square_Eyes_Cover2.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},

    {title: `hobbs & shaw`,
    posterSrc: `/images/Square_Eyes_Cover1.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},

    {title: `once upon a time in hollywood`,
    posterSrc: `/images/Square_Eyes_Cover3.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},

    {title: `scream`,
    posterSrc: `/images/Square_Eyes_Cover4.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},

    {title: `sweetheart`,
    posterSrc: `/images/Square_Eyes_Cover5.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},

    {title: `toy story 4`,
    posterSrc: `/images/Square_Eyes_Cover8.jpeg`,
    description: ``,
    directedBy: ``,
    featuring: ``,},
]

export function getFilmsIncluding(text) {
    const results = films.filter(film => film.title.includes(text));
    return results;
}
