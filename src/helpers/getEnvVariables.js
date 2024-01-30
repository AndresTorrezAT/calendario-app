

export const getEnvVariables = () => {

    import.meta.env; // obtener variables de entorno para frontend

    return {
        ...import.meta.env
    }
}