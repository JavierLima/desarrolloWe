import DateTimeFormat = Intl.DateTimeFormat;

export class Project{

  constructor(public project_id: string, public creator_id:string,public tittle: string , public description: string, public NProgrammers: number, public NDesigners: number, public NAnimators: number, public limit_date:  DateTimeFormat){}
}
