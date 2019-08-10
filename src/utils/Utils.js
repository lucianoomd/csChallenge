import Constants from "../constants/Constants";

export default class Utils {
    static fetchData(endpoint, callback) {
        let APIPath = Constants.api.PATH;

        const mountedURL = `${APIPath}${endpoint}`;

        fetch(mountedURL).then(result => {
            result.json().then(parsedData => {
                if (parsedData.message) callback({error: parsedData.message});

                else callback({ data: parsedData })
                
            });
        }, error => { error });
    }
}