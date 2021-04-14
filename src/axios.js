import axios from 'axios';

const instance=axios.create({
     baseURL:'https://tinder-d.herokuapp.com'
});

export default instance;