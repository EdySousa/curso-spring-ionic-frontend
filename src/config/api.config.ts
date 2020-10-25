const baseUrl = "http://localhost:8080";
const categorias = baseUrl + '/categorias';
const login = baseUrl + '/login';
const refrshToken = baseUrl + '/auth/refresh_token';
const bucketBaseUrl = "https://es-course-spring-ionic.s3-sa-east-1.amazonaws.com";
const clientes = baseUrl + '/clientes';
const email = clientes + '/email';

export const API_CONFIG = {
    baseUrl: baseUrl,
    categorias: categorias,
    bucketBaseUrl: bucketBaseUrl,
    login: login,
    refrshToken: refrshToken,
    email: email
}