import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schema/post.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>
    ) {}

    async findAll(): Promise<Post[]> {
        return this.postModel.find().exec()
    }

    async create(createPostDto: CreatePostDto) {
        const post = await this.postModel.create(createPostDto)
        
        return post.save()
    }
}
