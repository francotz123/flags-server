import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Category {

    @Field(() => ID, {nullable: true})
    id: string;

    @Field({nullable: true})
    createdAd: Date;

    @Field({nullable: true})
    updateAd: Date;

    @Field({nullable: true})
    name: string;
   // questions: Question;
}