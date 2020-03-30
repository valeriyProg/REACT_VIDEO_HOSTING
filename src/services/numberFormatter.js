export function stringToArray(value) {
    let temp = [];
    for(let i =0, max = value.length; i < max; i++) {
        temp.push(value[i]);
    }
    return temp;
}

export default function numberFormatter(value) {
    if (value <= 1000) {
        return value;
    }

    let valueArray = stringToArray(value.toString()).reverse();
    let valueArrayClone = [].concat(valueArray);
    let splittedValueArray = [];


    valueArray.forEach((item, index) => {
        if ((index+1)%3 === 0) {
            let temp = valueArrayClone.splice(0, 3);
            splittedValueArray.push(temp.reverse().join(''));
        }
    });

    if (valueArrayClone.length !==0 && valueArrayClone.length < 3) {
        let temp = valueArrayClone.splice(0, valueArrayClone.length);
        splittedValueArray.push(temp.reverse().join(''));
    }

    return splittedValueArray.reverse().join(' ');
}
