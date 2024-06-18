export interface AuthCredentialsAPI {
  authToken: string;
  user: {
    id: number;
    created_at: number;
    first_name: string;
    last_name: string;
    email: string;

    avatar: {
      url: string;
    } | null;
  };
}

export interface AuthCredentials {
  token: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    createAt: number;
    avatar: string | undefined;
  };
}
export interface SignUpDataApi {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
