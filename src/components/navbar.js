import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return(
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>
                    <form class="d-flex">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
        );
    }
}