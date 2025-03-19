import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateCommentDto
} from './dto/create-comment.dto';
import { Comment } from './schema/comment.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel:
    Model<Comment>
  ) {}
  async findAll(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }
  async create(createCommentDto: CreateCommentDto):
    Promise<Comment>
  {
    const createdComment =
      new this.commentModel(createCommentDto);
    return createdComment.save();
  }
}