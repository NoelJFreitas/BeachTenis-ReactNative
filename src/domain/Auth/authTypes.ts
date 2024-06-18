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
    };
  };
}

export interface AuthCredentials {
  token: string;
  user: {
    email: string;
    firstName: string;
    lastName: string;
    createAt: number;
    avatar: string;
  };
}
