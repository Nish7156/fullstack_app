import axios from "axios";

const api = axios.create({

    baseURL:process.env.NEXT_PUBLIC_BASE_URL,
    headers: { Authorization: `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` }
})

export const featchAllData = async()=>api.get('/api/products') 
