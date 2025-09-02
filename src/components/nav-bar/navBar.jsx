import "./nav-bar.scss";

const NavBar = () => {

    return (
        <header>
        <div id="header-bar">
            <div className="header-bar-left">
            <div id="burger-menu">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
                >
                <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 
                    1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 
                    1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 
                    0 0 1-.5-.5m0-4a.5.5 0 0 1 
                    .5-.5h10a.5.5 0 0 1 0 
                    1H3a.5.5 0 0 1-.5-.5"
                />
                </svg>
            </div>
            </div>

            <div className="header-bar-right">
            <div id="hint" className="right-icons">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lightbulb"
                viewBox="0 0 16 16"
                >
                <path d="M2 6a6 6 0 1 1 10.174 
                    4.31c-.203.196-.359.4-.453.619l-.762 
                    1.769A.5.5 0 0 1 10.5 13a.5.5 
                    0 0 1 0 1 .5.5 0 0 1 0 
                    1l-.224.447a1 1 0 0 1-.894.553H6.618a1 
                    1 0 0 1-.894-.553L5.5 15a.5.5 
                    0 0 1 0-1 .5.5 0 0 1 0-1 
                    .5.5 0 0 1-.46-.302l-.761-1.77a2 
                    2 0 0 0-.453-.618A5.98 5.98 0 0 
                    1 2 6m6-5a5 5 0 0 0-3.479 
                    8.592c.263.254.514.564.676.941L5.83 
                    12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 
                    5 0 0 0 8 1" />
                </svg>
            </div>

            <div id="stats" className="right-icons">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bar-chart"
                viewBox="0 0 16 16"
                >
                <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 
                    1 0 0 0-1 1v12a1 1 0 0 0 1 
                    1h2a1 1 0 0 0 1-1V2a1 1 0 0 
                    0-1-1zM6 7a1 1 0 0 1 1-1h2a1 
                    1 0 0 1 1 1v7a1 1 0 0 1-1 
                    1H7a1 1 0 0 1-1-1zm-5 4a1 
                    1 0 0 1 1-1h2a1 1 0 0 1 1 
                    1v3a1 1 0 0 1-1 1H2a1 1 0 
                    0 1-1-1z"/>
                </svg>
            </div>

            <div id="help" className="right-icons">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-question-circle"
                viewBox="0 0 16 16"
                >
                <path d="M8 15A7 7 0 1 1 8 1a7 
                    7 0 0 1 0 14m0 1A8 8 0 1 
                    0 8 0a8 8 0 0 0 0 16"/>
                <path d="M5.255 5.786a.237.237 0 0 0 
                    .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 
                    1.342-1.134.686 0 1.314.343 1.314 
                    1.168 0 .635-.374.927-.965 
                    1.371-.673.489-1.206 1.06-1.168 
                    1.987l.003.217a.25.25 0 0 0 
                    .25.246h.811a.25.25 0 0 0 
                    .25-.25v-.105c0-.718.273-.927 
                    1.01-1.486.609-.463 1.244-.977 
                    1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 
                    0-2.655.59-2.75 2.286m1.557 
                    5.763c0 .533.425.927 1.01.927.609 
                    0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 
                    0-1.009.388-1.009.94"/>
                </svg>
            </div>
            </div>
        </div>
        </header>
    )

}

export default NavBar;