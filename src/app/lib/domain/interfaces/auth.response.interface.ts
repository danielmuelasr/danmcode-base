import { IToken } from "./token.interface";
import { IUser } from "./user.interface";

export interface IAuthResponse {
    user: IUser;
    tokens: IToken;
}