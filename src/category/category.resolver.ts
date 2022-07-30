import { Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './model/category';

@Resolver(()=> Category)
export class CategoryResolver {
    
    public constructor(readonly categoryServices: CategoryService){}

    @Query(()=>[Category])
    async categories(){
        return await this.categoryServices.getMany();
    }
}
