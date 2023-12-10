import React from "react";
import { Button } from "@nextui-org/react";
import { Tooltip } from 'antd';


export default function RainbowHover() {
    return (
        <Tooltip title="prompt text">
            <Button radius="full" className="bg-transparent">
                Button
            </Button>
        </Tooltip>

    );
}
