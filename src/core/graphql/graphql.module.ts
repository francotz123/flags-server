import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path';
@Module({
    imports : [
        GraphQLModule.forRoot({
            introspection: true,
            autoSchemaFile: join(process.cwd(), 'src/core/graphql/api-schema.gpl'),
        }),
    ],
})
export class GraphqlModule {}
