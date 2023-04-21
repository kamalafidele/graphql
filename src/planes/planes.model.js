let planes = [
    {
        id: '1',
        speed: 45000,
        brand: 'Lockheed Martin',
        origin: 'USA',
        name: 'F-22 Raptor',
        reviews: [
            {
                content: 'This is really the most advanced fighter jet on the planet',
                reviewer: 'Tom Cruise'
            }
        ]
    },
    {
        id: '2',
        speed: 75000,
        brand: 'Sukhoi',
        origin: 'Russia',
        name: 'Su-57 Fellon',
        reviews: [
            {
                content: 'The Russian Fifth Gen fighter jet is really impressive and super maneuverable',
                reviewer: 'Tom Hardy'
            }
        ]
    },
    {
        id: '3',
        speed: 55000,
        brand: 'Dassault Rafale',
        origin: 'USA',
        name: 'Rafale',
        reviews: [
            {
                content: 'This French 4th Gen fighter is very tough and advanced than any jet in Europe',
                reviewer: 'Tom Hanks'
            }
        ]
    },
];

function getAllPlanes() {
    return planes;
}

function getPlanesBySpeed(min, max) {
    return planes.filter((plane) => plane.speed >= min && plane.speed <= max);
}

function getPlaneById(id) {
    return planes.find((plane) => plane.id === id)
}

function addNewPlane(id, speed, brand, origin, name) {
    const plane = {
        id,
        speed,
        brand,
        origin,
        name,
        reviews: [],
    };

    planes.push(plane);

    return plane;
}

function addPlaneReview(planeId, content, reviewer) {
    const index = planes.findIndex((plane) => plane.id === planeId);
    const plane = planes.at(index);

    planes = planes.filter((plane) => plane.id !== planeId);

    plane.reviews.push({ content, reviewer });
    planes.push(plane);

    return plane;
}

module.exports = {
    getAllPlanes,
    getPlanesBySpeed,
    getPlaneById,
    addNewPlane,
    addPlaneReview,
};
