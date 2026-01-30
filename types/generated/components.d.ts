import type { Schema, Struct } from '@strapi/strapi';

export interface CartCart extends Struct.ComponentSchema {
  collectionName: 'components_cart_carts';
  info: {
    displayName: 'Cart';
  };
  attributes: {
    category: Schema.Attribute.String;
    img: Schema.Attribute.String;
    name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    productId: Schema.Attribute.Integer;
    quantity: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cart.cart': CartCart;
    }
  }
}
