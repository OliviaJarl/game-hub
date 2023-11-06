import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd3d662cede5c4241b07bfc31716ed4af',
    }
})