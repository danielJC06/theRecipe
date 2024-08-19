declare class Recipe {
    constructor(id: string, title: string, author: string);
    id: string;
    title: string;
    author: string;
}
export declare class RecipeResolver {
    recipes(): Promise<Recipe[]>;
}
export {};
