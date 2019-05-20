export class UserModel {

  constructor(public user_id: string, public name: String, public surname: String, public password: String,public mail: String, public init_date: String, public user_type: number, public token: String) {
  }

}
