export declare class RecipeResolver {
    getRecipes(): Promise<{
        id: number;
        title: string;
        author: string;
    }[]>;
}
