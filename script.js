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
        .filter(Boolean);

    const bBand = b
        .toLowerCase()
        .split(regEx)
        .filter(Boolean);

    const aTrimmed = aBand.toString().trim();
    const bTrimmed = bBand.toString().trim();

    if (aTrimmed > bTrimmed) {
        return 1;
    } else if (aTrimmed < bTrimmed) {
        return -1;
    } else {
        return 0;
    }
}

const sortedBands = bands.sort(compare);

console.log(sortedBands);
