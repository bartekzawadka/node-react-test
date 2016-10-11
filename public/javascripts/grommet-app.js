/**
 * Created by barte_000 on 2016-10-11.
 */
var HelloWorldDashboard = React.createClass({
    render: function () {
        return (
            <Grommet.Tiles fill={true}>
            <Grommet.Tile align="start">
            <p>Hello from a Grommet page!</p>
        <p>Now, come back to the <a href="http://grommet.io/docs/documentation#understanding-grommet">Hello World</a> guide to continue your Grommet exploration.</p>
        </Grommet.Tile>
        </Grommet.Tiles>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <Grommet.App>
            <Grommet.Header direction="row" justify="between" large={true} pad={{horizontal: 'medium'}}>
        <Grommet.Title>Hello World</Grommet.Title>
        </Grommet.Header>
        <Grommet.Section pad={{horizontal: 'medium'}}>
        <HelloWorldDashboard />
        </Grommet.Section>
        </Grommet.App>
        );
    }
});

var element = document.getElementById('content');
ReactDOM.render(React.createElement(App), element);