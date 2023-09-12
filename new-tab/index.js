const frames = [
    { color: "#000" },
    { color: "#555" },
    { color: "#000" },
];

const timing = {
    duration: 5000,
    iterations: Infinity,
};

document.querySelector('h1').animate(frames, timing);
