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
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Recipe.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Recipe.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Recipe.prototype, "author", void 0);
Recipe = __decorate([
    (0, graphql_1.ObjectType)(),
    __metadata("design:paramtypes", [String, String, String])
], Recipe);
let RecipeResolver = class RecipeResolver {
    async recipes() {
        console.log('THIS IS WORKING');
        const data = [
            new Recipe('1', 'Book A', 'Author 1'),
            new Recipe('1', 'Book B', 'Author 2'),
        ];
        console.log('DATA: ', data);
        return data;
    }
};
exports.RecipeResolver = RecipeResolver;
__decorate([
    (0, graphql_1.Query)(() => [Recipe]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "recipes", null);
exports.RecipeResolver = RecipeResolver = __decorate([
    (0, graphql_1.Resolver)(() => Recipe)
], RecipeResolver);
//# sourceMappingURL=recipe.resolver.js.map