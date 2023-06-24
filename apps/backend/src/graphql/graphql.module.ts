import { Module } from '@nestjs/common';
import { GraphqlResolver } from './graphql.resolver';

@Module({
  providers: [GraphqlResolver],
})
export class GraphqlModule {}
