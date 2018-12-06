//My solution

const ul = document.querySelector("#bands");

function displayResults() {
    bands.forEach(band => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${band}`));
        ul.appendChild(li);
    });
}

const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog"
];

function compare(a, b) {
    const regEx = /^(?:the|a |an )/gim;
    const aBand = a
        .toLowerCase()
        .split(regEx)
        .filter(Boolean)
        .toString()
        .trim();

    const bBand = b
        .toLowerCase()
        .split(regEx)
        .filter(Boolean)
        .toString()
        .trim();

    if (aBand > bBand) {
        return 1;
    } else if (aBand < bBand) {
        return -1;
    } else {
        return 0;
    }
}

const sortedBands = bands.sort(compare);
displayResults();
