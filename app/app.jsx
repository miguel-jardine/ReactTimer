var 
    React           = require("react"),
    ReactDOM        = require("react-dom"),
    Main            = require("Main"),

    {Route, Router, IndexRoute, hashHistory} = require("react-router"),

end_var_def=[];

// Load Foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// App specific styling
require("style!css!sass!appStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
    </Router>,
    document.getElementById("app")
);

