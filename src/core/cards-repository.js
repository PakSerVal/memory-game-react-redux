const cards = [
    {
        imageId: 1,
        imageSrc: '/img/chicken.png',
    },
    {
        imageId: 2,
        imageSrc: '/img/cat.png',
    },
    {
        imageId: 3,
        imageSrc: '/img/chameleon.png',
    },
    {
        imageId: 4,
        imageSrc: '/img/cow.png',
    },
    {
        imageId: 5,
        imageSrc: '/img/duck.png',
    },
    {
        imageId: 6,
        imageSrc: '/img/lion.png',
    },
    {
        imageId: 7,
        imageSrc: '/img/pig.png',
    },
    {
        imageId: 8,
        imageSrc: '/img/toucan.png',
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
