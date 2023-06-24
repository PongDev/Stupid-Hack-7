import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class GraphqlResolver {
  @Query(() => String)
  getPing(): string {
    return 'Pong!';
  }
}
