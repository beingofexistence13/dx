import React from 'react';
import Input from '../../Common/Input';
import { IreduxRender } from "../../../interface/user/IreduxRender";


const index = (props: IreduxRender) => {
  
  return (
    <Input
        label={'Citizen ID'}
        req={false}
        helperText={''}
        error={props.meta!.error}
        inputProps={{
          placeholder: 'x-xxxx-xxxxx-xx-x',
          style: {
            textAlign: 'center'
          }
        }}
        {...props.input}
        {...props.meta}
        {...props.custom}
    /> 
  );
};

export default index;
