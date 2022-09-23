const items = [
    {
        id: "1",
        slug: "gravitational-attraction",
        name: "Gravitational Attraction",
        path: "gravitational-attraction/main",
        grade: "C-Core",
        image: "ga.png",
        props: [
            { id: 1, min: 0.1, max: 5, step: 0.1, name: "Gravity" },
            { id: 2, min: 30, max: 100, step: 10, name: "Attractor Mass" },
        ],
        controls: { 0: 0.1, 1: 30 },
    },
    {
        id: "2",
        slug: "pendulum",
        name: "Pendulum",
        path: "pendulum/main",
        grade: "C-Core",
        image: "pendulum.png",
        props: [
            { id: 1, min: 10, max: 500, step: 10, name: "Line Length" },
            { id: 2, min: 30, max: 100, step: 10, name: "Speed" },
        ],
        controls: { 0: 170, 1: 30 },
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
