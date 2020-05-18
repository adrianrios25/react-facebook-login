import React, { useState } from "react";
import "./App.css";
import SocialButton from "./SocialButton";

const App = () => {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState("");

    const handleSocialLogin = (user) => {
        console.log(user);
        console.log(user._profile);
        setData(user);
        setPicture(user._profile.profilePicURL);
        if (user._token.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    };

    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };

    return (
        <div className='container' style={{ padding: "20px" }}>
            {!login && (
                <SocialButton
                    provider='facebook'
                    appId='<replace-with-your-facebook-app-id>'
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                    Login with Facebook
                </SocialButton>
            )}
            {login && (
                <div className='row'>
                    <div className='col m8 offset-m2'>
                        <div className='card-panel z-depth-1'>
                            <div className='row valign-wrapper'>
                                <div className='col s3'>
                                    <img
                                        src={picture}
                                        alt=''
                                        className='circle responsive-img'
                                    />
                                </div>
                                <div className='col s9'>
                                    <span className='black-text'>
                                        <h5>{data._profile.name}</h5>
                                        <h5>{data._profile.email}</h5>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
