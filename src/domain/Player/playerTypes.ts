// export interface Player extends User

export interface PlayerApi {
  id: number;
  created_at: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: {
    url: string;
  } | null;
}

export interface Player {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string | undefined;
}
