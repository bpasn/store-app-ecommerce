// interface ProductModal {
//     id: string,
//     nameTH: string,
//     nameEN?: string,
//     descriptionTH?: string,
//     descriptionEN?: string,
//     price: number,
//     stock: StockModal,
//     productImages: ProductImageModal[],
//     categories: ProductCategoryModal[],
//     productOptions: ProductOptionModal[],
// }

interface ProductImageModal {
    id: string;
    source: string;
}

interface ProductCategoryModal {
    id: string;
    name: string;
    storeId: string;
}

interface ProductOptionModal {
    id: string;
    optionName: string;
    oneMustBeChosen: boolean;
    manyCanBeChosen; boolean;
    lengthSelect: number;
    choices: ChoiceModal[];
}

interface ChoiceModal {
    id: string;
    name: string;
    choiceEffect?: 'unchanged' | 'incresed' | 'decresed';
    price: number;
    status: 'available' | 'suspended';
}
interface StockModal {
    id: string,
    unitType: UnitType,
    unitQuantity: number,
    quantity: number,
    status: StatusStock,
    reOrder: boolean;
}

enum UnitType {
    PIECE = "PIECE",
    KILOGRAM = "KILOGRAM",
    GRAM = "GRAM"
}

enum StatusStock {
    IN_STOCK = "IN_STOCK",
    OUT_OF_STOCK = "OUT_OF_STOCK",
    LOW_STOCK = "LOW_STOCK"
}


// interface ProductWithCategory extends Omit<ProductModel, "categories"> { }

// interface CategoryWithProduct {
//     categoryId: string;
//     categoryName: string;
//     products: ProductWithCategory[];
// }
