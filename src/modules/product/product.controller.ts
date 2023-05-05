import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Product } from './entities/product.entity';
import { User } from 'src/auth/models/User';
import { UnauthorizedError } from 'src/auth/errors/unauthorized.error';
@Controller('v1/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(
    @Body() createProductDto: CreateProductDto,
    @CurrentUser() currentUser: User
  ): Promise<Product> {
    if (currentUser?.id) {
      const product =  this.productService.create(createProductDto, currentUser.id);
      return product;
    }

    throw new UnauthorizedError("cannot access this route")    
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}


