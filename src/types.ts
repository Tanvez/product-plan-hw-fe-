export interface Row {
  id: string;
  label: string;
  bars: Lane[];
  width:string;
  height:string;
}

export interface Lane {
  id: string;
  content: string;
  url:string;
  width:string;
  items?:string[];
}

export interface Item {
  id: string;
  content:string;
  url:string;
  width:string;
}


