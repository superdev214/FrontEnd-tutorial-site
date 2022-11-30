export  interface typeTutorial{
    id? : any | null,
    title? : string | undefined,
    description? : string | undefined,
    published? : boolean
}
export  interface typeUser {
    first_name : string | null,
    last_name : string | null,
    email : string | null,
    password : string | null,
    token? : string
}