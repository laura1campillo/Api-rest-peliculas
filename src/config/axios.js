import axios from "axios";

export const axios = axios.create({

    baseURL: process.env.REACTO_APP_BASE_URL || 'http//localhost:4000/api/v1'
})