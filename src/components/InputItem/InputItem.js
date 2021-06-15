import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
  <TextField
          id="standard-read-only-input"
          label="Записать новое задание"
          defaultValue=""
          InputProps={{
            readOnly: true,
          }}
  />
  </div>);

export default InputItem;
