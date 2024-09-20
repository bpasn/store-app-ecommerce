import { AxiosError } from 'axios';
export default class BaseException extends Error {
    _code: string;
    constructor(message: string, code: string) {
        super(message);
        this._code = code;
    }

    get code(): string {
        return this._code;
    }
    set code(code: string) {
        this._code = code;
    }

    static report(error: any): string {
        if (error instanceof AxiosError) {
            return error.response?.data.message;
        }
        if (error instanceof Error) {
            return error.message;
        }
        return "Internal server error"
    }
}