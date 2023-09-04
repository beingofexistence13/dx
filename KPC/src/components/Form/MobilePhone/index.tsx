import React from 'react';
// import MuiPhoneNumber from 'material-ui-phone-number'

import { Box, TextField } from "@material-ui/core";
import { MenuItem } from "material-ui";
import useStyles from "../../Common/Input/useStyles";
import PhoneInput from 'react-phone-input-2'
import './style.css'

const Input = (props: any) => {
    const classes = useStyles();
  
    return (
      <Box className={classes.BoxInline} pr={1} pl={1} >
        <Box className={classes.BoxText} pr={1}>
          {props.label || props.labels} : {props.req && <span>*</span>}
        </Box>
        <Box>
            <PhoneInput
            specialLabel={''}
            country={'th'}
            inputStyle={{
              borderColor: (props.touched && props.error) && "red"
            }}
            {...props}
            />
            {(props.touched && props.error) && <p style={{color:'red'}} className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense">{props.error}</p> }
        </Box>
      </Box>
    );
  };
  
const index = (props: any) => {
    return (
        <Input
            label={"Mobile Phone"}
            req={true}
            helperText={""}
            error={true}
            isSelect={false}
            {...props.input}
            {...props.meta}
            {...props.custom}
        />
    )
} 

export default index