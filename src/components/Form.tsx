import {AddItemForm} from "./AddItemForm";
import {Button} from "@material-ui/core";
import style from "../App.module.css";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {addChildrenAC, InitialStateType, removeChildAC} from "../store/childrenReducer";
import {addUserAC, InitialUserType} from "../store/userReducer";
import {v1} from "uuid";

export type UserPropType = {
    name: string | null
    age: number
}

export type FakeType = {
    id: string
    name: string | null
    age: number
}
type FormPropsType = {
    setFakeState: Dispatch<SetStateAction<FakeType[]>>
    setUserData: Dispatch<SetStateAction<UserPropType>>
    userData: UserPropType
    fakeState: FakeType[]
}

export const Form = (props: FormPropsType) => {
    const children = useSelector<AppRootStateType, InitialStateType[]>(state => state.children)
    const user = useSelector<AppRootStateType, InitialUserType>(state => state.user)
    const dispatch = useDispatch()

    const [show, setShow] = useState(true)


    const changeUserData = (id: string, name: string | null, age: number) => {
        props.setUserData({name, age})
    }

    const changeChildrenData = (id: string, name: string | null, age: number) => {
        const newState = props.fakeState.map(el => el.id === id ? ({id: el.id, name, age}) : {...el})
        if (newState) {
            props.setFakeState(newState)
        }
    }

    let saveData = () => {
        dispatch(addUserAC(props.userData.name, props.userData.age))
        dispatch(addChildrenAC([...props.fakeState]))
    }

//Почему-то не удаляется CHILD из store
//Не работает удаление фейкового объекта из массива fakeState
    const removeChild = (taskId: string) => {
        dispatch(removeChildAC(taskId))
        props.setFakeState(props.fakeState.filter(el => el.id !== taskId))
    }

    const addFakeItemForm = () => {
        props.setFakeState([...props.fakeState, {id: v1(), name: '', age: 0}])
    }
    useEffect(() => {
        if (props.fakeState.length >= 5 || children.length >= 5) {
            setShow(false)
        } else {
            setShow(true)
        }
    }, [props.fakeState.length, children.length])

    // useEffect(() => {
    //
    // }, [user.name, user.age])


    return (
        <div>
            <div className={style.form}>
                <AddItemForm name={user.name}
                             age={user.age}
                             id={'6'} title={"Персональные данные"}
                             callback={changeUserData}/>
                <div>
                <span className={style.button}> Дети(макс.5)
                    {show ? <Button color="primary" variant="outlined"
                                    style={{
                                        height: "55px",
                                        top: "10px",
                                        borderRadius: "100px",
                                        position: "relative",
                                        left: "40%"
                                    }}
                                    onClick={addFakeItemForm}>
                        Добавить ребёнка
                    </Button> : null}
                </span>
                </div>
                <span>
                {props.fakeState.map(el => {
                    return (
                        <span
                            key={el.id}
                            id={el.id}
                            className={style.inputForm}>
                            {/* должно быть внутри AddItemForm  error={error} setError={setError}*/}
                            <AddItemForm name={el.name} age={el.age} id={el.id} callback={changeChildrenData}/>
                        <Button
                            onClick={() => removeChild(el.id)}
                            color="primary" variant="outlined"
                            style={{height: "55px", top: "10px"}}>
                            Удалить
                        </Button>
                    </span>
                    )
                })}
            </span>
                <div className={style.button}>
                    <Button color="default" variant="contained"
                            style={{height: "45px", borderRadius: "100px", marginLeft: "10px"}}
                            onClick={saveData}>
                        Сохранить
                    </Button>
                </div>
            </div>
        </div>
    )
}