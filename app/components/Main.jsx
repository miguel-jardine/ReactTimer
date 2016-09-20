var 
    React       = require("react"),
    Nav         = require("Nav"),

end_var_def = [];


var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Nav />
                <div>
                    <h2>Main rendered</h2>
                    {this.props.children}
                </div>
            </div>
       );
    }

});

module.exports = Main;