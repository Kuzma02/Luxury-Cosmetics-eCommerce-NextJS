import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";

export const useProductStore = create()(
    persist(
        (set) => ({
            products: [],
            allQuantity: 0,
            total: 0,
            addToCart: (newProduct) => {
                set((state) => {
                    const cartItem = state.products.find(
                        (item) => item.id === newProduct.id
                    );
                    if (!cartItem) {
                        return {products: [...state.products, newProduct]};
                    } else {
                        state.products.map((product) => {
                            if (product.id === cartItem.id) {
                                product.quantity += newProduct.quantity;
                            }
                        });
                    }

                    return {products: [...state.products]};
                });
            },
            clearCart: () => {
                set((state) => {
                    return {
                        products: [],
                        allQuantity: 0,
                        total: 0,
                    };
                });
            },
            removeFromCart: (id) => {
                set((state) => {
                    state.products = state.products.filter(
                        (product) => product.id !== id
                    );
                    return {products: state.products};
                });
            },

            calculateTotals: () => {
                set((state) => {
                    let amount = 0;
                    let total = 0;
                    state.products.forEach((item) => {
                        console.log(item);
                        amount += item.quantity;
                        total += item.quantity * item.package;
                    });

                    return {
                        products: state.products,
                        allQuantity: amount,
                        total: total,
                    };
                });
            },
            updateCartQuantity: (id, amount) => {
                set((state) => {
                    const cartItem = state.products.find((item) => item.id === id);

                    if (!cartItem) {
                        return {products: [...state.products]};
                    } else {
                        state.products.map((product) => {
                            if (product.id === cartItem.id) {
                                product.quantity = amount;
                            }
                        });
                    }

                    return {products: [...state.products]};
                });
            },
        }),
        {
            name: "products-storage", // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
);
