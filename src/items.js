const items = [
    {
        id: "1",
        name: "Gravitational_attraction",
        image: "orbit.svg",
        path: "ga/main",
        grade: "tc",
        props: [
            { id: 1, min: 1, max: 10, step: 0.5, name: "Gravity" },
            { id: 2, min: 1, max: 100, step: 1, name: "Planet count" },
        ],
    },
    {
        id: "2",
        name: "Air_resistance",
        image: "orbit.svg",
        path: "ga/main",
        grade: "1bac",
        props: [
            { min: 1, max: 10, step: 0.5, name: "Gravity" },
            { min: 1, max: 100, step: 1, name: "Planet count" },
        ],
    },
    {
        id: "3",
        name: "Friction",
        image: "orbit.svg",
        path: "ga/main",
        grade: "2bac",
        props: [
            { min: 1, max: 10, step: 0.5, name: "Gravity" },
            { min: 1, max: 100, step: 1, name: "Planet count" },
        ],
    },
    {
        id: "4",
        name: "Fluid_resistance",
        image: "orbit.svg",
        path: "ga/main",
        grade: "tc",
        props: [
            { min: 1, max: 10, step: 0.5, name: "Gravity" },
            { min: 1, max: 100, step: 1, name: "Planet count" },
        ],
    },
    {
        id: "5",
        name: "Boid_Simulation",
        image: "orbit.svg",
        path: "ga/main",
        grade: "1bac",
        props: [
            { min: 1, max: 10, step: 0.5, name: "Gravity" },
            { min: 1, max: 100, step: 1, name: "Planet count" },
        ],
    },
    {
        id: "6",
        name: "Tank_simulation",
        image: "orbit.svg",
        path: "ga/main",
        grade: "2bac",
        props: [
            { min: 1, max: 10, step: 0.5, name: "Gravity" },
            { min: 1, max: 100, step: 1, name: "Planet count" },
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
