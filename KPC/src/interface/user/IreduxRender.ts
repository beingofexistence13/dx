
export interface IreduxRender { 
  [key: string]: any;
  input?: any;
  label?: any;
  meta?: IError | undefined;
  custom?: any
  rest?: any;
}

export interface IError {
  touched: any;
  error: any;
}