import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './schema/post.schema';
import { CreatePostDto } from './dto/create-post.dto';

@Resolver(of => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(returns => [Post])
  async posts() {
    return await this.postsService.findAll()
  }

  @Mutation(returns => Post)
  async createPost(@Args('createPostDto') createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto)
  }
}
