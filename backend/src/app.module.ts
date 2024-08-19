import { Module } from '@nestjs/common';
import { RecipeResolver } from './recipe/recipe.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';

@Module({
  providers: [RecipeResolver],
  imports: [
    RecipeResolver,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include: [RecipeResolver],
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      // introspection: process.env.NODE_ENV !== 'production',
      playground: false,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
})
export class AppModule {}
