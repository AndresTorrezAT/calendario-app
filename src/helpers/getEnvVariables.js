

export const getEnvVariables = () => {

    import.meta.env; // obtener variables de entorno para frontend

    return {
        ...import.meta.env
        //VITE_API_URL: import.meta.env.VITE_API_URL,
    }
}