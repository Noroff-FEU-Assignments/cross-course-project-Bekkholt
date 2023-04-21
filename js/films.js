export const films = [
    {id: 14,
    title: `The Addams Family`,
    posterSrc: `/images/Square_Eyes_Cover6.jpeg`,
    description: `The eccentrically macabre family moves to a bland surburb where Wednesday Addams friendship with the daughter of a hostile and conformist local reality show host exacerbates conflict between the families.`,
    directedBy: `Greg Tiernan, Conrad Vernon`,
    featuring: `Oscar Isaac, Charlize Theron and Chloë Grace Moretz`,
    alt: `The Addams Family - Halloween`,
    },

    {id: 16,
    title: `Batman`,
    posterSrc: `/images/Square_Eyes_Cover7.jpeg`,
    description: `When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.`,
    directedBy: `Matt Reeves`,
    featuring: `Robert Pattinson, Zoë Kravitz and Jeffrey Wright`,
    alt: `The Batman - Unmask the truth`,
    },

    {id: 22,
    title: `Godzilla King of the Monsters`,
    posterSrc: `/images/Square_Eyes_Cover2.jpeg`,
    description: `The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.`,
    directedBy: `Michael Dougherty`,
    featuring: `Kyle Chandler, Vera Farmiga and Millie Bobby Brown`,
    alt: `Godzilla - King of the monsters`,
    },

    {id: 24,
    title: `Fast & Furious Presents: Hobbs & Shaw`,
    posterSrc: `/images/Square_Eyes_Cover1.jpeg`,
    description: `Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.`,
    directedBy: `David Leitch`,
    featuring: `Dwayne Johnson, Jason Statham and Idris Elba`,
    alt: `Fast & Furious Presents: Hobbs & Shaw`,
    },

    {id: 26,
    title: `Once Upon a Time in Hollywood`,
    posterSrc: `/images/Square_Eyes_Cover3.jpeg`,
    description: `A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.`,
    directedBy: `Quentin Tarantino`,
    featuring: `Leonardo DiCaprio, Brad Pitt and Margot Robbie`,
    alt: `Once upon a time in Hollywood`,
    },

    {id: 12,
    title: `Scream`,
    posterSrc: `/images/Square_Eyes_Cover4.jpeg`,
    description: `25 years after a streak of brutal murders shocked the quiet town of Woodsboro, Calif., a new killer dons the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town's deadly past.`,
    directedBy: `Matt Bettinelli-Olpin, Tyler Gillett`,
    featuring: `Neve Campbell, Courtney Cox and David Arquette`,
    alt: `Scream`,
    },

    {id: 20,
    title: `Sweetheart`,
    posterSrc: `/images/Square_Eyes_Cover5.jpeg`,
    description: `Jenn has washed ashore a small tropical island and it doesn't take her long to realize she's completely alone. She must spend her days not only surviving the elements, but must also fend off the malevolent force that comes out each night.`,
    directedBy: `J.D. Dillard`,
    featuring: `Kiersey Clemons, Emory Cohen and Hanna Mangan Lawrence`,
    alt: `Sweetheart`,
    },

    {id: 18,
    title: `Toy Story 4`,
    posterSrc: `/images/Square_Eyes_Cover8.jpeg`,
    description: `When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.`,
    directedBy: `Josh Cooley`,
    featuring: `Tom Hanks, Tim Allen and Annie Potts`,
    alt: `Toy Story 4`,
    },
]

export const genre = [

    {genreName: `This is halloween`,
    id: 20,
    films: [26, 2, 5, 6]
    },

    {genreName: `Action`,
    id: 21,
    films: [1, 2, 3, 5]
    },

    {genreName: `Family`,
    id: 22,
    films: [7, 0, 1, 2]
    },

    {genreName: `Thriller`,
    id:23,
    films: [6, 2, 4, 3]
    },

    {genreName: `Horror`,
    id: 24,
    films: [5, 0, 2, 6]
    },

    {genreName: `Girls just wanna have fun`,
    id: 25,
    films: [6, 4, 3, 5]
    },

    {genreName: `Where dreams come true`,
    id: 26,
    films: [7, 2, 0, 1]
    },
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