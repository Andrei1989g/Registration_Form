export type InitialUserType = {
    name: string | null
    age: number
}
let initialState: InitialUserType = {name: "", age: 0}

export const userReducer = (state: InitialUserType = initialState, action: ActionsType): InitialUserType => {
    switch (action.type) {
        case "ADD-USER": {
            return {name: action.name, age: action.age}
        }
        default:
            return state
    }
}
type ActionsType = AddUserACType
type AddUserACType = ReturnType<typeof addUserAC>
export const addUserAC = (name: string | null, age: number) => {
    return {
        type: "ADD-USER",
        name,
        age
    } as const
}