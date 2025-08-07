"use client";
import Link from "next/link";
import {HiCheck, HiClock, HiQuestionMarkCircle} from "react-icons/hi";
import {HiXMark} from "react-icons/hi2";
import {useProductStore} from "../_zustand/store";
import {ProductCartItemQuantity} from "@/components";
import Image from "next/image";
import {useMemo} from "react";

const CartPage = () => {
    // Use separate selectors to avoid creating new objects on each render
    const products = useProductStore((state) => state.products);
    const total = useProductStore((state) => state.total);
    const removeFromCart = useProductStore((state) => state.removeFromCart);
    const calculateTotals = useProductStore((state) => state.calculateTotals);

    // Memoize the subtotal calculation
    const subtotal = useMemo(() => {
        return products.reduce((sum, product) => sum + (product.package * product.quantity), 0);
    }, [products]);

    const shipping = 5.00;
    const tax = subtotal * 0.2 // 20% tax
    const orderTotal = subtotal + shipping + tax;

    console.log(products)

    return (
        <div className="bg-primary">
            <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
                    Shopping Cart
                </h1>
                <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>

                        <ul
                            role="list"
                            className="divide-y divide-gray-200 border-b border-t border-gray-200"
                        >
                            {products.map((product) => {
                                console.log(product)
                                return (<li key={product?.id} className="flex py-6 sm:py-10">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={`${product?.image}`}
                                            alt={product?.name}
                                            width={192}
                                            height={192}
                                            className="h-24 w-24 object-cover object-center sm:h-48 sm:w-48"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-base font-medium text-blackPrimary">
                                                        {product?.name}
                                                    </h3>
                                                </div>
                                                <div className="mt-1 flex text-sm">
                                                    <p className="text-blackPrimary">{product?.size}</p>
                                                    {1 ? (
                                                        <p className="border-l border-gray-200 text-blackPrimary">
                                                            {product?.quantity} in cart
                                                        </p>
                                                    ) : null}
                                                </div>
                                                <p className="mt-1 text-sm font-medium text-blackPrimary">
                                                    ${product.package}
                                                </p>
                                            </div>

                                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                                <ProductCartItemQuantity
                                                    id={product?.id}
                                                    startQuantity={product?.quantity}
                                                />

                                                <div className="absolute right-0 top-0">
                                                    <button
                                                        type="button"
                                                        className="-m-2 inline-flex p-2 text-blackPrimary hover:text-red-800"
                                                        onClick={() => {
                                                            removeFromCart(product?.id);
                                                            calculateTotals();
                                                        }}
                                                    >
                                                        <span className="sr-only">Remove</span>
                                                        <HiXMark className="h-5 w-5" aria-hidden="true"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mt-4 flex space-x-2 text-sm text-blackPrimary">
                                            {1 ? (
                                                <HiCheck
                                                    className="h-5 w-5 flex-shrink-0 text-green-500"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <HiClock
                                                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                                                    aria-hidden="true"
                                                />
                                            )}

                                            <span>{1 ? "In stock" : `Ships in 2 days`}</span>
                                        </p>
                                    </div>
                                </li>
                                )})}
                        </ul>
                    </section>

                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 rounded-lg bg-primary px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 border border-1 border-gray-200"
                    >
                        <h2
                            id="summary-heading"
                            className="text-lg font-medium text-blackPrimary"
                        >
                            Order summary
                        </h2>

                        <dl className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-blackPrimary">Subtotal</dt>
                                <dd className="text-sm font-medium text-blackPrimary">
                                    ${total}
                                </dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex items-center text-sm text-blackPrimary">
                                    <span>Shipping estimate</span>
                                    <a href="#" className="ml-2 flex-shrink-0 text-blackPrimary">
                    <span className="sr-only">
                      Learn more about how shipping is calculated
                    </span>
                                        <HiQuestionMarkCircle
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </dt>
                                <dd className="text-sm font-medium text-blackPrimary">$5.00</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex text-sm text-blackPrimary">
                                    <span>Tax estimate</span>
                                    <a
                                        href="#"
                                        className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                                    >
                    <span className="sr-only">
                      Learn more about how tax is calculated
                    </span>
                                        <HiQuestionMarkCircle
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </dt>
                                <dd className="text-sm font-medium text-blackPrimary">${tax}</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="text-base font-medium text-blackPrimary">
                                    Order total
                                </dt>
                                <dd className="text-base font-medium text-blackPrimary">
                                    ${orderTotal}
                                </dd>
                            </div>
                        </dl>

                        <div className="mt-6">
                            <Link
                                href="/checkout"
                                className="flex justify-center items-center w-full h-14 bg-white text-blackPrimary text-xl max-sm:h-10 max-sm:text-xl max-[460px]:text-lg max-[360px]:h-9"
                            >
                                Checkout
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
