"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const node_path_1 = require("node:path");
const definitionsFactory = new graphql_1.GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: ['./src/**/*.graphql'],
    path: (0, node_path_1.join)(process.cwd(), 'src/graphql.ts'),
    emitTypenameField: true,
});
//# sourceMappingURL=generate-typings.js.map