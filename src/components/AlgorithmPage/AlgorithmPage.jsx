import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import stacksReducer from '../../redux/reducers/stacksReducer';

class AlgorithmPage extends Component {
    state={
        textInput: ''
    };
    // Functions
    handleChange = (event) => {
        let textInput=event.target.value;
        this.setState({
            textInput: textInput,
        })
    }; // end handleChange

    sendText = (textInput) => {
        this.props.dispatch({type: 'POST_STACK', payload: this.state})
    }; // end sendText

    render (){

      let stacksReducer=this.props.reduxState.stacksReducer;

        return(
      <>      
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper>
            <TextField
              onChange={this.handleChange}
              label="Enter Text"
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <Paper>
            <Button
                color="Primary"
                onClick={()=>this.sendText()}
                variant="contained"
            >
            Stacks
            </Button> Is your word a palindrome?
          </Paper>
        </Grid>
        
        <Grid item xs={6}>
          <Paper
          >
            <Box
              height={35}
              
            >
                {stacksReducer}
            </Box>
          </Paper>
        </Grid>
      </Grid>
      </>
        ); // end return
    }; // end render
}; // end class AlgorithmPage

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(AlgorithmPage);