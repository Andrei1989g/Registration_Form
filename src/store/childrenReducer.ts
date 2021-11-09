export type InitialStateType = {
    id: string
    name: string | null
    age: number
}
let initialState: InitialStateType[] = []


export const childrenReducer = (state: InitialStateType[] = initialState, action: ActionsType): InitialStateType[] => {
    switch (action.type) {
        case "ADD-CHILDREN": {
            return [...action.children]
        }
        default:
            return state
    }
}

type ActionsType = AddChildrenACType

export type AddChildrenACType = ReturnType<typeof addChildrenAC>
export const addChildrenAC = (children: { id: string, name: string | null, age: number }[]) => {
    return {
        type: "ADD-CHILDREN",
        children
    } as const
}
