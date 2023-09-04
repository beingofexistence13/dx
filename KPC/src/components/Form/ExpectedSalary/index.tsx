import React from "react";
import Input from "../../Common/Input";
import { IreduxRender } from "../../../interface/user/IreduxRender";


const index = (props: IreduxRender) => {
  return (
    <Input
        label={"Expected Salary"}
        req={true}
        helperText={""}
        isSelect={false}
        error={props.meta!.error}
        {...props.input}
        {...props.meta}
        {...props.custom}
    >THB
    </Input>  
  );
};

export default index;
