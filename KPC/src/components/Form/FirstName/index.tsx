import React from "react";
import Input from "../../Common/Input";
import { IreduxRender } from "../../../interface/user/IreduxRender";


const index = (props: IreduxRender) => {
  return (
    <Input
        label={"First Name"}
        req={true}
        helperText={""}
        isSelect={false}
        error={props.meta!.error}
        {...props.input}
        {...props.custom}
        {...props.meta}
    />  
  );
};

export default index;
