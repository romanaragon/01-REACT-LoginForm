import React from 'react';
import Navbar from './navbar';
import Username from './username';
import Password from './password';
import LoginButton from './loginbutton';


export default class Main extends React.Component {
    render() {
        return(
            <body class="container">
                <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>
                    <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </nav>
                <br></br>
                <br></br>
                <div class = "container">
                    <div class = "row justify-content-center">
                        <div class="col-auto">
                            <h1>WELCOME TO LOGin APP</h1>
                        </div>
                    </div>
                    <div class = "row justify-content-center">
                        <div class="col-auto">
                            <h6>Where all you do is log in over and over again. Even the links dont work! *yay*</h6>
                        </div>
                    </div>
                    <div class = "row justify-content-center">
                        <div class="col-auto">
                            <h6>READY TO BEGIN?</h6>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div class="container" id="loginform">
                <div class="row justify-content-center">
                        <div class="col-auto">
                            <h3>Log In</h3>         
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-auto">
                            <Username/>          
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-auto">      
                            <Password/>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-auto">
                            <LoginButton/>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}
