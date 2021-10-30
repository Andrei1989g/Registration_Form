export type InitialStateType = {
    id: string
    name: string | null
    age: number
}
let initialState: InitialStateType[] = []


export const childrenReducer = (state: InitialStateType[] = initialState, action: ActionsType): InitialStateType[] => {
    switch (action.type) {
        case "REMOVE-CHILD": {
            return state.filter(el => el.id !== action.taskId)
        }
        case "ADD-CHILDREN": {
            return [...action.children]
        }
        default:
            return state
    }
}

type ActionsType = AddChildrenACType | RemoveChildACType

export type AddChildrenACType = ReturnType<typeof addChildrenAC>
export const addChildrenAC = (children: { id: string, name: string | null, age: number }[]) => {
    return {
        type: "ADD-CHILDREN",
        children
    } as const
}
export type RemoveChildACType = ReturnType<typeof removeChildAC>
export const removeChildAC = (taskId: string) => {
    return {
        type: "REMOVE-CHILD",
        taskId
    } as const
}