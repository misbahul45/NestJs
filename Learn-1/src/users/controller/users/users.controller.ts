import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';


@Controller('users')
export class UsersController {
    @Get()
    getUsers(){
        return {userName:"misbahul",email:"Muttaqin" }        
    }
    // @Get(':id')
    // getUserById(@Req() request:Request, @Res() response:Response){
    //     console.log(request.params)
    //     response.send({
    //         id:request.params,
    //         name:"Misbahul",
    //         email:"misbahu.muttaqin395@gmail.com"
    //     })
    // }
    @Get(':id/:postId')
    getUserById(@Param('id') id:string, @Param('postId') postId:string){
        return {
            id,
            postId,
            post:"first post",
            author:"misbahul"
        }
    }

    @Get('search')
    getUser(@Query('sortBy') sortBy:string ){
        console.log(sortBy)
        return {
            sortBy
        }
    }

    // @Post('create')
    // createUser(@Req() request:Request, @Res() response:Response){
    //     console.log(request.body)
    //     response.send('user created')
    // }

    @Post('create')
    createUser(@Body() userData:CreateUserDto){
        console.log(userData)
        return {}
    }

    @Get('posts')
    getUsersPosts(){
        return[
            {
                userName:"misbahul",
                email:"Muttaqin",
                posts:[
                    {
                        id:1,
                        title:"first post"
                    },
                    {
                        id:2,
                        title:"second post"
                    },
                    {
                        id:3,
                        title:"third post"
                    }
                ]
            }
        ]
    }
    @Get('posts/comments')
    getUsersPostsComennts(){
        return[
            {
                id:1,
                title:"firs post",
                comments:[
                    
                ]
            }
        ]
    }
}
