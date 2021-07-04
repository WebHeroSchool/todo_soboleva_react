import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class InputItem extends React.Component{
    state = {
      inputValue: ''
    };

    onButtonClick = () => {
      if (this.state.inputValue !== '') {
        this.setState ({
        inputValue: ''
      })
      this.props.onClickAdd (this.state.inputValue);
      }
    }

    render() {
       const { onClickAdd } = this.props;

       return (
          <div>
          <TextField
              id="standard-full-width"
              style={{ margin: 8 }}
              placeholder="Добавить новое задание"
              fullWidth
              margin="normal"
              InputLabelProps={{
              shrink: true,
              }}
              value={this.state.inputValue}
              onChange ={event => this.setState({inputValue: event.target.value})}
          />

          <Button
              variant="outlined"
              color="secondary"
              fullWidth
              style={{ margin: 8 }}
              onClick= {this.onButtonClick}>
              Добавить
           </Button>
        </div>
        );
    }
}

export default InputItem;
