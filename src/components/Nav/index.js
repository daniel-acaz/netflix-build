import React from 'react'
import './styles.scss'

function Nav() {
    return (
        <div className="nav">
            <div className="nav__contents">
                <img className="nav__logo"
                    src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=49"
                    alt=""
                ></img>
                <img className="nav__avatar"
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt=""
                ></img>
            </div>
        </div>
    )
}

export default Nav;