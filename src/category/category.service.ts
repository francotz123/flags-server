import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    async getMany(){
        return [{
            id: '2e1321',
            createAt: new Date(),
            updateAt: new Date(),
            name : 'Ejemplo Query'
        }]
    }
    async get(){}
    async create(){}
    async update(){}
    async delete(){}

}
