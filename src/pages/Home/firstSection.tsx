import React, { Component } from 'react';
import { 
  TextField,
  FormControl, 
  Button, 
  Grid 
} from '@material-ui/core';

export class FirstSection extends Component {
  constructor (props: any) {
    super(props)
  };

render() {
  return (
    <Grid container className="first-section">
      <Grid item xs={6} className="form-center">
          <div className="ml-200">
            <h2>O <b>Primeiro</b></h2>
            <br/>
            <h2>Software Odontológico</h2>
            <br/>
            <h2>com Telemonitoramento</h2>
            <br/>

            <h4>Transforme seu consultório odontológico com</h4><br/>
            <h4>tecnologia, organização e produtividade</h4><br/>
            <h4>Utilize o <b>Sistema</b> e tenha uma gestão eficaz</h4><br/>
            <h4>onde quer que voce esteja.</h4><br/>
          <div>
            <h3>Experimente a usar agora</h3>
            <FormControl>
              <TextField id="nome" className="input" label="Nome" variant="outlined"/>
              <TextField id="email" className="input" label="Email" variant="outlined"/>
              <Button className="button">Começar</Button>
            </FormControl>
          </div>
          </div>

        </Grid>

        <Grid item xs={6}>
            <div className="mr-200">
              <img src="https://www.dentaloffice.com.br/wp-content/uploads/2020/06/Imagem-Topo-Telemonitoramento-Dental-01.svg"
                  alt=""
                  width="575" 
                  height="494"
                  className="img-center"
                ></img>
            </div>
        </Grid>
    </Grid>

  );
};

} export default FirstSection