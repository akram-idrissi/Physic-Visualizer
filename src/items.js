const items = [
    {
        id: "1",
        slug: "gravitational-attraction",
        name: "Gravitational Attraction",
        path: "gravitational-attraction/main",
        grade: "C-Core",
        props: [
            { id: 1, min: 0.1, max: 5.1, step: 0.5, name: "Gravity" },
            { id: 2, min: 30, max: 100, step: 10, name: "Planet count" },
        ],
        controls: { 0: 0.1, 1: 30 },
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
