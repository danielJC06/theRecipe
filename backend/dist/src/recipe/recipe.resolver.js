"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
let Recipe = class Recipe {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Recipe.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Recipe.prototype, "titles", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Recipe.prototype, "author", void 0);
Recipe = __decorate([
    (0, graphql_1.ObjectType)()
], Recipe);
let RecipeResolver = class RecipeResolver {
    async getRecipes() {
        return [
            { id: 1, title: 'Book 1', author: 'Author 1' },
            { id: 2, title: 'Book 2', author: 'Author 2' },
        ];
    }
};
exports.RecipeResolver = RecipeResolver;
__decorate([
    (0, graphql_1.Query)(() => [Recipe]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "getRecipes", null);
exports.RecipeResolver = RecipeResolver = __decorate([
    (0, graphql_1.Resolver)(Recipe)
], RecipeResolver);
//# sourceMappingURL=recipe.resolver.js.map