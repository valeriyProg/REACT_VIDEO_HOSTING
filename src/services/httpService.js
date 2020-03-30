import {RestApiClient} from "../api/RestApiClient";

const http  = new RestApiClient();
export default http;

export  const fetchData = (url, params, context) => {
    if (!context) {
        return http.get(url);
    }

    http.get(url)
        .then(response => response.json())
        .then(data => {
            context.setState({
                data
            });
        });
};
