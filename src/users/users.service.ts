import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    hello():boolean{
        return false;
    }

    create(
        {name,lastname}:{name:string,lastname:string}
    ):{
        name:string,
        lastname:string,
        //  fullname:string
    }{
        console.log({name,lastname});
        
        return{name:name + "",lastname}
        // return{fullname:name+''+lastname}
        
    }
    update({id}:{id:string}): string{
        return id;
    }
    findOne({id}:{id:string}): string{
        return id;
    }
}
