import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://react-my-burger-ipek.firebaseio.com/'
});

export default instance;