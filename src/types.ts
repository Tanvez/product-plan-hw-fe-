export interface Row {
  id: string;
  label: string;
  bars: Bar[];
  width:string;
  height:string;
}

export interface Bar {
  id: string;
  content:string;
  url:string;
  width:string;
}