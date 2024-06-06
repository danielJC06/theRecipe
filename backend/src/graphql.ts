
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    __typename?: 'IQuery';
    getRecipes(): Nullable<Nullable<Recipe>[]> | Promise<Nullable<Nullable<Recipe>[]>>;
}

export interface Recipe {
    __typename?: 'Recipe';
    id?: Nullable<string>;
    title?: Nullable<string>;
    author?: Nullable<string>;
}

type Nullable<T> = T | null;
