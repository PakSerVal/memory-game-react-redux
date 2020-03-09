const cards = [
    {
        imageId: 1,
        imageSrc: process.env.PUBLIC_URL + '/img/chicken.png',
    },
    {
        imageId: 2,
        imageSrc: process.env.PUBLIC_URL + '/img/cat.png',
    },
    {
        imageId: 3,
        imageSrc: process.env.PUBLIC_URL + '/img/chameleon.png',
    },
    {
        imageId: 4,
        imageSrc: process.env.PUBLIC_URL + '/img/cow.png',
    },
    {
        imageId: 5,
        imageSrc: process.env.PUBLIC_URL + '/img/duck.png',
    },
    {
        imageId: 6,
        imageSrc: process.env.PUBLIC_URL + '/img/lion.png',
    },
    {
        imageId: 7,
        imageSrc: process.env.PUBLIC_URL + '/img/pig.png',
    },
    {
        imageId: 8,
        imageSrc: process.env.PUBLIC_URL + '/img/toucan.png',
    },
];

export function getShuffledCards() {
    const shuffled = cards.slice();

    shuffled.forEach((card) => {
        shuffled.push(Object.assign({}, card))
    });

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }


    const result = {};
    for (let i = 0; i < shuffled.length; i++) {
        const card = shuffled[i];
        card.id = i + 1;

        result[card.id] = card;
    }

    return result;
}
