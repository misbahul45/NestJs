import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';


@Controller('users')
export class UsersController {
    @Get('sort')
    getUser(@Query('sortDesc', ParseBoolPipe) sortDesc:boolean ){
        return {
            sortDesc
        }
    }
    @Get()
    getUsers(){
        return {userName:"misbahul",email:"Muttaqin" }        
    }
     @Get(':id')
     getUserById(@Param('id', ParseIntPipe) id:number){
         return({
             id,
             name:"Misbahul",
             email:"misbahu.muttaqin395@gmail.com"
         })
     }
    @Get(':id/:postId')
    getUserByIdAndPost(@Param('id') id:string, @Param('postId') postId:string){
        return {
            id,
            postId,
            post:"first post",
            author:"misbahul"
        }
    }



    // @Post('create')
    // createUser(@Req() request:Request, @Res() response:Response){
    //     console.log(request.body)
    //     response.send('user created')
    // }

    @Post('create')
    @UsePipes(new ValidationPipe())
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
