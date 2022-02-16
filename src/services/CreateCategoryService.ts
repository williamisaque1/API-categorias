import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateCategoryServices {
  // sem hackzinho estão comentados
  /* private categoriesRepository: CategoriesRepository;*/
  constructor(private categoriesRepository: ICategoriesRepository) {
    /*this.categoriesRepository = categoriesRepository;*/
  }
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    console.log("Find - ", categoryAlreadyExists);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }
    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoryServices };
