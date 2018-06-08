import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./components/App";
import appReducers from "./reducers";

let appStore = createStore(appReducers);

ReactDOM.render(
    <Provider store={appStore}>
        <BrowserRouter basename="/myshop/">
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));