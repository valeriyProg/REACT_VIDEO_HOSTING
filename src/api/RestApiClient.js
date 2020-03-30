// WRAPPER ON SOME HTTP LIB (NATIVE FETCH, AXIOS etc.)
export class RestApiClient {
    constructor(url= '') {
        this.url = url;
    }

    get = (path, param = undefined) => {
        return fetch(path, param);
    };

    post = (path, param = undefined) => {
        return fetch(path, param);
    };

    delete = (path, param = undefined) => {
        return fetch(path, param);
    };
}
