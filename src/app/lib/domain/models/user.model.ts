import { IUser } from "../interfaces/user.interface";

export class User {

    id: string;
    fullname: string;
    email: string;
    username: string;
    is_active: boolean;
    token: string | null;
    is_blocked: boolean;
    first_login: boolean;
    last_login: string;
    created_at: string;
    updated_at: string;

    constructor({ id, fullname, email, username, is_active, token, is_blocked, first_login, last_login, created_at, updated_at }: IUser) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.username = username;
        this.is_active = is_active;
        this.token = token;
        this.is_blocked = is_blocked;
        this.first_login = first_login;
        this.last_login = last_login;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}