import React from 'react';
import Button from '../components/Button';
import '../scss/containers/Nav.scss';

const Nav = () => {
    return (
        <>
            <div className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <div>Nav</div>
                    </div>
                    <div className="nav-content">
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
                    <div className="nav-menu">
                        <Button size="medium" color="primary" border="true">
                            입력
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
