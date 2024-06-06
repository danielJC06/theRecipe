import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql';

@ObjectType()
class Recipe {
  @Field()
  id: string;
  @Field()
  titles: string;
  @Field()
  author: string;
}

@Resolver(Recipe)
export class RecipeResolver {
  @Query(() => [Recipe])
  async getRecipes() {
    return [
      { id: 1, title: 'Book 1', author: 'Author 1' },
      { id: 2, title: 'Book 2', author: 'Author 2' },
    ];
  }
}
