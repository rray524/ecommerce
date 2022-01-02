import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDE3NTAxNTlhMzUwNTMwYjYzZWQ3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTExNjk5NSwiZXhwIjoxNjQxMzc2MTk1fQ.RwFrFvnGMp5dI-OHPbfgzYF59ozg-HMk2ZT0oI7hk-M"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});