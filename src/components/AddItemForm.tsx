import React, {ChangeEvent, useState} from "react";
import {TextField} from "@material-ui/core";
import style from "../App.module.css"

type AddItemFormPropsType = {
    title?: string
    callback: (id: string, name: string | null, age: number) => void
    id: string
    name: string | null
    age: number
}
export const AddItemForm = (props: AddItemFormPropsType) => {
    let [name, setName] = useState(props.name)
    let [age, setAge] = useState<number>(props.age)

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        props.callback(props.id, name, age)
    }
    const onChangeAgeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setAge(+e.currentTarget.value)
        props.callback(props.id, name, +e.currentTarget.value)
    }

    return <div>{props.title}
        <span className={style.inputForm}>
        <TextField
            variant="outlined"
            value={name}
            onChange={onChangeNameHandler}
            label="Имя"/>
        <span>
            <TextField variant="outlined"
                       value={age}
                       onChange={onChangeAgeHandler}
                       label="Возраст"
                       inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}/>
        </span>
    </span>
    </div>
}