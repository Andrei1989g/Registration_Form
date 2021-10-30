import React, {useState} from 'react';
import {Footer} from './components/Footer';
import {Header} from "./components/Header";
import {Route, Switch} from 'react-router-dom';
import {Preview} from './components/Preview';
import {FakeType, Form, UserPropType} from "./components/Form";
import Paper from '@material-ui/core/Paper';
import style from './App.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {InitialUserType} from "./store/userReducer";

function App() {
    const user = useSelector<AppRootStateType, InitialUserType>(state => state.user)

    const [userData, setUserData] = useState<UserPropType>({name: user.name, age: user.age});
    const [fakeState, setFakeState] = useState<FakeType[]>([]);

    return (
        <div className={style.app}>
            <div className={style.mainContent}>
                <Paper style={{margin: "5px", border: " solid  0.5px"}}>
                    <Header/>
                    <Switch>
                        <Route exact path="/Form">
                            <Form userData={userData}
                                  fakeState={fakeState}
                                  setUserData={setUserData}
                                  setFakeState={setFakeState}/>
                        </Route>
                        <Route exact path="/Preview"><Preview/></Route>
                    </Switch>
                    <Footer/>
                </Paper>
            </div>
        </div>
    );
}

export default App;
