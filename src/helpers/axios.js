import axios from 'axios';

const httpClient = axios.create({
	baseURL: process.env.API_URL || 'http://143.110.236.149:8180'
})

const httpApi = axios.create({
	baseURL: process.env.API_URL || 'http://143.110.236.149:8080'
})

export {
	httpClient,
	httpApi
} 