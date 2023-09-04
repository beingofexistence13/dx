export interface InputType {
    [key: string]: any;
    label: string;
    labels?: string;
    req?: boolean;
    value?: string;
    helperText: string;
    error?: boolean;
    isSelect?: boolean;
    defaultValue?: any;
    option?: any[] | undefined;
    isdate?: boolean;
    inputProps?: any;
    innerRef?: any;
    mask?: any;
    ref?: any;
    maskChar?: any;
  }