import { Resolver } from '@nestjs/graphql';
import { ReactionsService } from './reactions.service';

@Resolver()
export class ReactionsResolver {
  constructor(private readonly reactionsService: ReactionsService) {}
}
