export default defineEventHandler(async (_event) => {
    return [
      {
        id: 1,
        name: "Andor",
        img: "/img/shows/andor.png",
        premieredAt: "2022-09-21",
        episodeCount: 12,
        source: "https://en.wikipedia.org/wiki/Andor_(TV_series)",
        description: "Andor, also known as Star Wars: Andor...",
      },
      {
        id: 2,
        name: "The Mandalorian",
        img: "/img/shows/mandalorian.png",
        premieredAt: "2019-11-12",
        episodeCount: 23,
        source: "https://en.wikipedia.org/wiki/The_Mandalorian",
        description: "The Mandalorian is an American space Western...",
      },  
    ]
  })