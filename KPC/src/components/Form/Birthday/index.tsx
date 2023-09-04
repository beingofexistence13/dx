import React from "react";
import { IreduxRender } from "../../../interface/user/IreduxRender";
import Input from "../../Common/Input";

const index = (props: IreduxRender) => {

  return (
    <Input
        label={"Birthday"}
        req={true}
        helperText={""}
        error={false}
        isdate={true}
        inputProps={{ max: new Date().toISOString().slice(0,10) }}
        {...props.input}
        {...props.meta}
        {...props.custom}
    /> 
  );
};

export default index;
