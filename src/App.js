import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


injectTapEventPlugin();
const button = {
    margin: 12
}

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <AppBar title="Thrimbda's Site" />
                    <Grid fluid style={{margin: "20px auto"}}>
                        <Row className="center-xs middle-xs">
                            <Col xs={8}>
                                <Paper style={{height: "70vh", padding: "20vh"}} zDepth={3}>
                                    <h1>
                                        Thrimbda's Site.
                                    </h1>
                                    <p>
                                        under construction, thank you for coming by.<br/>
                                    </p>

                                    <RaisedButton
                                        href="https://github.com/Thrimbda"
                                        target="_blank"
                                        primary={true}
                                        label="View My Github Profile"
                                        style={button}
                                    />

                                    <RaisedButton
                                        href="http://blog.thrimbda.com"
                                        target="_blank"
                                        label="View My Blog"
                                        secondary={true}
                                        style={button}
                                    />
                                </Paper>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
