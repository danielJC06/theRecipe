"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const recipe_resolver_1 = require("./recipe/recipe.resolver");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const path_1 = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        providers: [recipe_resolver_1.RecipeResolver],
        imports: [
            recipe_resolver_1.RecipeResolver,
            graphql_1.GraphQLModule.forRoot({
                include: [recipe_resolver_1.RecipeResolver],
                driver: apollo_1.ApolloDriver,
                typePaths: ['./**/*.graphql'],
                playground: false,
                definitions: {
                    path: (0, path_1.join)(process.cwd(), 'src/graphql.ts'),
                },
                plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)()],
            }),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map