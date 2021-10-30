import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {InitialUserType} from "../store/userReducer";
import {InitialStateType} from "../store/childrenReducer";
import style from "../App.module.css"

export const Preview = () => {
    const userName = useSelector<AppRootStateType, InitialUserType>(state => state.user)
    const children = useSelector<AppRootStateType, InitialStateType[]>(state => state.children)

    return (
        <div className={style.preview}>
            <span>Персональные данные</span>
            <div className={style.childrenData}><b>
                {userName.name},{" " + userName.age + " лет"}</b></div>
            <div>Дети</div>
            <div>{children.map(el => {
                return <span className={style.childrenSpan} key={el.id}>
                    <b>{el.name},{" " + el.age + " лет"}</b>
                </span>
            })}</div>
        </div>
    )
}