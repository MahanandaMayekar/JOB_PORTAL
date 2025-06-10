export type User = {
    id: string,
    email: string, 
    password: string,
    name:string
}

export type AuthState = {
    token: string | null,
    user:User|null
}


export const authInitialState: AuthState = {
    token: null,
    user: null, 
  };