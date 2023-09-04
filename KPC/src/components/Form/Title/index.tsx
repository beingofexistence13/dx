import React from "react";
import Input from "../../Common/Input";
import { IreduxRender } from "../../../interface/user/IreduxRender";


const index = (props : IreduxRender) => {

  return (
        <Input
            label={"Title"}
            req={true}
            helperText={""}
            defaultValue={"Mr"}
            isSelect={true}
            option={["Mr", "Ms"]}
            {...props.input}
            {...props.custom}
            {...props.meta}
        />    
  );
};

export default index;
