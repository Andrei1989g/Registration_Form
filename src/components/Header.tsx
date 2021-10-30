import React from "react";
import {NavLink} from "react-router-dom";
import style from "../App.module.css";


export const Header = () => {
    return <div className={style.header}>
        <nav>
            <NavLink to="/Form"><span>Форма</span></NavLink>
            <NavLink to="/Preview"><span style={{marginLeft:"10px"}}>Превью</span></NavLink>
        </nav>
    </div>
}