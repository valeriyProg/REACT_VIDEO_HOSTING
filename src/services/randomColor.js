const randomNumber = max => Math.floor(Math.random() * Math.floor(max));

export function randomRGB(max) {
    return `rgb(${ randomNumber(max) }, ${ randomNumber(max) }, ${ randomNumber(max) })`;
}
