import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Get('preview1')
    hello():boolean{
        return this.userService.hello();
    }
    @Post('create')
    create(
        @Body(){name,lastname}:{name:string,lastname:string}
    ):{
        name:string,
        lastname:string,
        //  fullname:string
    }{
        
        return this.userService.create({name,lastname});
        // return{fullname:name+''+lastname}
        
    }
    @Put('update/:id')
    update(@Param(){id}:{id:string}): string{
        return this.userService.update({id});
    }
    @Get('user')
     findOne(@Query(){id}:{id:string}): string{
        return this.userService.findOne({id});
    }
}
