const items = [
    {
        id: "1",
        slug: "gravitational-attraction",
        name: "Gravitational Attraction",
        image: "orbit.svg",
        path: "gravitational-attraction/main",
        grade: "C-Core",
        props: [
            { id: 1, min: 1, max: 100, step: 1, name: "Gravity" },
            { id: 2, min: 1, max: 100, step: 1, name: "Planet count" },
        ],
    },
    {
        id: "2",
        slug: "air-resistance",
        name: "Air resistance",
        image: "orbit.svg",
        path: "gravitational-attraction/main",
        grade: "C-Core",
        props: [
            { id: 1, min: 1, max: 100, step: 1, name: "Gravity" },
            { id: 2, min: 1, max: 100, step: 1, name: "Planet count" },
        ],
    },
    {
        id: "3",
        slug: "friction",
        name: "Friction",
        image: "orbit.svg",
        path: "gravitational-attraction/main",
        grade: "1-Bac",
        props: [
            { id: 1, min: 1, max: 100, step: 1, name: "Gravity" },
            { id: 2, min: 1, max: 100, step: 1, name: "Planet count" },
        ],
    },
    {
        id: "4",
        slug: "fluid-resistance",
        name: "Fluid Resistance",
        image: "orbit.svg",
        path: "fluid-resistance/main",
        grade: "1-Bac",
        props: [
            { id: 1, min: 1, max: 100, step: 1, name: "Gravity" },
            { id: 2, min: 1, max: 100, step: 1, name: "Planet count" },
        ],
    },
    {
        id: "5",
        slug: "tank-rotation",
        name: "Tank Rotation",
        image: "orbit.svg",
        path: "gravitational-attraction/main",
        grade: "2-Bac",
        props: [
            { id: 1, min: 1, max: 100, step: 1, name: "Gravity" },
            { id: 2, min: 1, max: 100, step: 1, name: "Planet count" },
            { id: 3, min: 1, max: 100, step: 1, name: "Gravity" },
            { id: 4, min: 1, max: 100, step: 1, name: "Planet count" },
            { id: 5, min: 1, max: 100, step: 1, name: "Gravity" },
            { id: 6, min: 1, max: 100, step: 1, name: "Planet count" },
        ],
    },
    {
        id: "6",
        slug: "boid-simulation",
        name: "Boid Simulation",
        image: "orbit.svg",
        path: "gravitational-attraction/main",
        grade: "2-Bac",
        props: [
            { id: 1, min: 1, max: 100, step: 1, name: "Gravity" },
            { id: 2, min: 1, max: 100, step: 1, name: "Planet count" },
        ],
    },
];

const getItems = () => {
    return items;
};

const getItem = (id) => {
    return items.find((item) => item.id === id);
};

const getItemByGrade = (grade) => {
    return items.filter((item) => item.grade === grade);
};

export { getItems, getItem, getItemByGrade };
