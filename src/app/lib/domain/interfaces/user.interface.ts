export interface IUser {
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
}