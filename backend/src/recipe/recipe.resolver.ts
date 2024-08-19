import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql';

@ObjectType()
class Recipe {
  constructor(id: string, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  @Field()
  public id: string;
  @Field()
  public title: string;
  @Field()
  public author: string;
}

@Resolver(() => Recipe)
export class RecipeResolver {
  @Query(() => [Recipe])
  async recipes() {
    console.log('THIS IS WORKING');
    const data = [
      new Recipe('1', 'Book A', 'Author 1'),
      new Recipe('1', 'Book B', 'Author 2'),
    ];

    console.log('DATA: ', data);
    return data;
  }
}
