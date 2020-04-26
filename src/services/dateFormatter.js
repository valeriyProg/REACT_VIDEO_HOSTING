import {months} from "./years";

export default function (dateInfo) {
    let date = new Date(dateInfo);
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    return `${ day } ${ month } ${ year }`;
}
