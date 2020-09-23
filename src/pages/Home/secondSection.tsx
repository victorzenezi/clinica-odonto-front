import React, { Component } from 'react';
import { 
  Grid 
} from '@material-ui/core';

export class SecondSection extends Component {
  constructor (props: any) {
    super(props)
  };

render() {
  return (
    <>

    <Grid container className="second-section">
      <h2>Building...</h2>
    </Grid>

    </>
  );
};

} export default SecondSection