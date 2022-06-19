import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {setupInterceptorsTo} from "./Interceptors";

function AxiosInterceptorNavigate() {
    let navigate = useNavigate();
    setupInterceptorsTo(axios,navigate);
    return <></>;
}


export default AxiosInterceptorNavigate;

