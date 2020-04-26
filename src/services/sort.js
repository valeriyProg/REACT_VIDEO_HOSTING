export const orderBy = {
    ASC: 'ASC',
    DESC: 'DESC',
    rate: 'RATE'
};

export default function sort(target, order) {
    let temp = [].concat(target);

    switch (order) {
        case "ASC":
            break;
        case "DESC":
            temp.reverse();
            break;
        case "RATE":
            temp.sort((a, b) => {
                if (a.liked.length > b.liked.length) {
                    return 1;
                }
                if (a.liked.length < b.liked.length) {
                    return -1;
                }

                return 0;
            });
            break;
            default:
                break;
    }

    return temp;
}
