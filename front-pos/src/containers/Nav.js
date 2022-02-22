import React from 'react';
import Button from '../components/Button';
import '../scss/containers/Nav.scss';

const Nav = () => {
    return (
        <>
            <div className="wrapper">
                Nav
                <Button size="small" color="primary">
                    button1
                </Button>
                <Button size="medium" color="primary">
                    button1
                </Button>
                <Button size="large" color="primary">
                    button1
                </Button>
            </div>
        </>
    );
};

export default Nav;
