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

    return aBand > bBand ? 1 : -1;
}

const sortedBands = bands.sort(compare);
displayResults();

//Wes Bos Solution

// function strip(bandName) {
//     return bandName.replace(/^(a | an | the)/gim, "").trim(); //Will replace article with empty string, my solution works with .split(), filer(), toString() but does the same. Wes solution seems to be shorter.
// }

// const sortedBands = bands.sort(
//     (a, b) => (strip(a) > strip(b) ? 1 : -1) // easier as in shorter. It does not manipulate the original array and also works straigth with the string without creating an array forst like I did with .split()
// );

// document.querySelector("#bands").innerHTML = sortedBands
//     .map(band => `<li>${band}</li>`)
//     .join(""); //.map returns an array so we have to .join() it and make it a string The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
