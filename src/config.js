//APIS PARA USAR EN LA APP

const API_INFECTED = 'http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected';
const API_COUNTRIES = 'http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries';

const handleError = err => {
    alert(`Error getting data from Api.`);
};

export {
    API_INFECTED,
    API_COUNTRIES,
    handleError
}

