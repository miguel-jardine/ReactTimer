var 
    React       = require("react"),

    {Link, IndexLink}      = require("react-router"),

end_var_def = [];


var Nav = React.createClass({
    
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">ReactTimer</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="">Miguel Jardine</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

});

module.exports = Nav;