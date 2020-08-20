import React from 'react';

function Login() {
    return (
        <div>
            <div class="title">Example login screen</div>
            <div class="subTitle">Getting started with Green.</div>

            <form>
                <label class="formLabel">
                    Email Address
                <input class="email" type="email" required />
                </label>
                <label class="checkbox">
                    Remember this device
                <input type="checkbox"></input>
                    <span class="checkmark"></span>
                </label>
                <input class="submit" type="submit" value="Sign in" />
            </form>
        </div>
    );
}

export default Login;
