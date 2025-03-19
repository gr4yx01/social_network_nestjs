import {
  Resolver,
  Query,
  Mutation,
  Args
} from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import {
  CreateCommentDto
} from './dto/create-comment.dto';
import { Comment } from './schema/comment.schema';

@Resolver(of => Comment)
export class CommentsResolver {
  constructor(
    private readonly commentsService: CommentsService
  ) {}
  @Query(returns => [Comment])
  async comments() {
    return this.commentsService.findAll();
  }
  @Mutation(returns => Comment)
  async createComment(
    @Args('createCommentDto') createCommentDto:
    CreateCommentDto
  ) {
    return this.commentsService.create(
      createCommentDto
    );
  }
}