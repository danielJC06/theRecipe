export interface IQuery {
    recipes(): Nullable<Nullable<Recipe>[]> | Promise<Nullable<Nullable<Recipe>[]>>;
}
export interface Recipe {
    id?: Nullable<string>;
    title?: Nullable<string>;
    author?: Nullable<string>;
}
type Nullable<T> = T | null;
export {};
