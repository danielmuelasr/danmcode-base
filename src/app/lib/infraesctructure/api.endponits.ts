import ApiClient from "./api.client";

export class ApiError extends Error {
    status?: number;
    data?: any;
    validationErrors?: { path: string; msg: string }[];

    constructor(message: string, status?: number, data?: any, validationErrors?: any[]) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.data = data;
        this.validationErrors = validationErrors || [];
    }
}

export const handleApiError = (error: any) => {
    if (error?.response) {
        const { status, data } = error.response;

        if (data?.error) {
            throw new ApiError(data.error.message, status, data);
        }

        if (data?.errors) {
            const validationErrors = data.errors.map((err: any) => ({
                path: err.path,
                msg: err.msg
            }));
            throw new ApiError("Errores de validación", status, data, validationErrors);
        }
    }
    throw new ApiError(error.message || 'Error desconocido');
};

export const getResource = async <T>(resource: string, id?: string): Promise<T | null> => {
    try {
        const url = id ? `/${resource}/${id}` : `/${resource}`;
        const response = await ApiClient.get<T>(url);
        return response.data;
    } catch (error: any) {
        handleApiError(error);
        throw error;
    }
};

export const postResource = async (resource: string, data: any = {}) => {
    try {
        const response = await ApiClient.post(`/${resource}`, data);
        return response.data;
    } catch (error: any) {
        handleApiError(error);
        throw error;
    }
};
