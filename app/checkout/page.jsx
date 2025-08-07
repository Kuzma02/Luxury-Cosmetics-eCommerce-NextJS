"use client";
import {useState} from "react";
import {HiCheck, HiTrash} from "react-icons/hi";
import {useProductStore} from "@/app/_zustand/store";

const deliveryMethods = [
    {
        id: 1,
        title: "Standard",
        turnaround: "4–10 business days",
        price: "$5.00",
    },
    {id: 2, title: "Express", turnaround: "2–5 business days", price: "$16.00"},
];

const paymentMethods = [
    {id: "credit-card", title: "Credit card"},
    {id: "paypal", title: "PayPal"},
    {id: "etransfer", title: "eTransfer"},
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const CheckoutPage = () => {
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
        deliveryMethods[0]
    );

    // Use separate calls instead of returning an object
    const products = useProductStore((state) => state.products);
    const total = useProductStore((state) => state.total);
    const removeFromCart = useProductStore((state) => state.removeFromCart);
    const calculateTotals = useProductStore((state) => state.calculateTotals);

    const handleDeliveryMethodChange = (e) => {
        const selectedId = parseInt(e.target.value);
        const selectedMethod = deliveryMethods.find(method => method.id === selectedId);
        setSelectedDeliveryMethod(selectedMethod);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const order = {
            orderNumber: Math.floor(Math.random() * 1000000) + "",
            customerName: data["first-name"],
            customerLastname: data["last-name"],
            companyName: data["company"],
            country: data["country"],
            street: data["address"],
            city: data["city"],
            zip: data["postal-code"],
            phone: data["phone"],
            email: data["email-address"],
            orderNotes: data["notes"],
            products: products,
            total: total,
            paymentMethod: paymentMethods[0].title,
            paymentStatus: "Processing",
            orderStatus: "Processing",
            date: new Date().toISOString(),
            deliveryMethod: selectedDeliveryMethod.title,
        };

        const response = await fetch("http://localhost:3001/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(order),
        });

        if (response.ok) {
            alert("Order placed successfully");
        } else {
            alert("Order failed");
        }
    }

    const shipping = 5.00;
    const tax = Number(total) * 0.2 // 20% tax
    const orderTotal = Number(total) + shipping + tax;

    return (
        <div className="bg-primary">
            <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Checkout</h2>

                <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16" onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <h2 className="text-lg font-medium text-blackPrimary">
                                Contact information
                            </h2>

                            <div className="mt-4">
                                <label
                                    htmlFor="email-address"
                                    className="block text-sm font-medium text-blackPrimary"
                                >
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        id="email-address"
                                        placeholder="Enter your email address"
                                        name="email-address"
                                        autoComplete="email"
                                        className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 border ouline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-gray-300 pt-10">
                            <h2 className="text-lg font-medium text-gray-900">
                                Shipping information
                            </h2>

                            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="first-name"
                                            name="first-name"
                                            placeholder="Enter your first name"
                                            autoComplete="given-name"
                                            className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 border ouline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="last-name"
                                            placeholder="Enter your last name"
                                            name="last-name"
                                            autoComplete="family-name"
                                            className="block w-full h-10  text-blackPrimary indent-2 ouline-none border-gray-300 border"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Company
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Enter your company name"
                                            id="company"
                                            className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 ouline-none border"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="address"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Enter your street address"
                                            id="address"
                                            autoComplete="street-address"
                                            className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 ouline-none border"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="apartment"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Apartment, suite, etc.
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="apartment"
                                            id="apartment"
                                            placeholder="Enter your apartment, suite, etc."
                                            className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 ouline-none border"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="city"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        City
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            autoComplete="address-level2"
                                            placeholder="Enter your city"
                                            className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 ouline-none border"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Country
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="country"
                                            placeholder="Enter your country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 ouline-none border"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="region"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        State / Province
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="region"
                                            id="region"
                                            placeholder="Enter your state or province"
                                            autoComplete="address-level1"
                                            className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 ouline-none border"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="postal-code"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Postal code
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="postal-code"
                                            placeholder="Enter your postal code"
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 ouline-none border"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Phone
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            placeholder="Enter your phone number"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 ouline-none border"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="notes"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Notes
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            name="notes"
                                            placeholder="Enter any additional notes or instructions"
                                            id="notes"
                                            className="block w-full h-20  text-blackPrimary indent-2 border-gray-300 ouline-none border"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-gray-300 pt-10">
                            <fieldset>
                                <legend className="text-lg font-medium text-gray-900">
                                    Delivery method
                                </legend>
                                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                    {deliveryMethods.map((deliveryMethod) => (
                                        <div key={deliveryMethod.id} className="relative">
                                            <input
                                                type="radio"
                                                id={`delivery-${deliveryMethod.id}`}
                                                name="delivery-method"
                                                value={deliveryMethod.id}
                                                checked={selectedDeliveryMethod.id === deliveryMethod.id}
                                                onChange={handleDeliveryMethodChange}
                                                className="sr-only"
                                            />
                                            <label
                                                htmlFor={`delivery-${deliveryMethod.id}`}
                                                className={classNames(
                                                    selectedDeliveryMethod.id === deliveryMethod.id
                                                        ? "border-transparent ring-2 ring-indigo-500"
                                                        : "border-gray-300",
                                                    "relative flex cursor-pointer border bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500"
                                                )}
                                            >
                                                <span className="flex flex-1">
                                                    <span className="flex flex-col">
                                                        <span className="block text-sm font-medium text-gray-900">
                                                            {deliveryMethod.title}
                                                        </span>
                                                        <span className="mt-1 flex items-center text-sm text-gray-500">
                                                            {deliveryMethod.turnaround}
                                                        </span>
                                                        <span className="mt-6 text-sm font-medium text-gray-900">
                                                            {deliveryMethod.price}
                                                        </span>
                                                    </span>
                                                </span>
                                                {selectedDeliveryMethod.id === deliveryMethod.id && (
                                                    <HiCheck
                                                        className="h-5 w-5 text-indigo-600"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                                <span
                                                    className={classNames(
                                                        selectedDeliveryMethod.id === deliveryMethod.id
                                                            ? "border-indigo-500"
                                                            : "border-transparent",
                                                        "pointer-events-none absolute -inset-px border-2"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>

                        {/* Payment */}
                        <div className="mt-10 border-t border-gray-300 pt-10">
                            <h2 className="text-lg font-medium text-gray-900">Payment</h2>

                            <fieldset className="mt-4">
                                <legend className="sr-only">Payment type</legend>
                                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                    {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                                        <div key={paymentMethod.id} className="flex items-center">
                                            <input
                                                id={paymentMethod.id}
                                                name="payment-type"
                                                type="radio"
                                                defaultChecked={paymentMethodIdx === 0}
                                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                                htmlFor={paymentMethod.id}
                                                className="ml-3 block text-sm font-medium text-gray-700"
                                            >
                                                {paymentMethod.title}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>

                            <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                                <div className="col-span-4">
                                    <label
                                        htmlFor="card-number"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Card number
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="card-number"
                                            placeholder="Enter your card number"
                                            name="card-number"
                                            autoComplete="cc-number"
                                            className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 border ouline-none"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-4">
                                    <label
                                        htmlFor="name-on-card"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name on card
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="name-on-card"
                                            name="name-on-card"
                                            placeholder="Enter the name on your card"
                                            autoComplete="cc-name"
                                            className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 border ouline-none"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-3">
                                    <label
                                        htmlFor="expiration-date"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Expiration date (MM/YY)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            name="expiration-date"
                                            id="expiration-date"
                                            autoComplete="cc-exp"
                                            className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 border ouline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="cvc"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        CVC
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="cvc"
                                            placeholder="CVC"
                                            id="cvc"
                                            autoComplete="csc"
                                            className="block w-full h-10  text-blackPrimary indent-2 border-gray-300 border ouline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order summary */}
                    <div className="mt-10 lg:mt-0">
                        <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

                        <div className="mt-4 border border-gray-300 border bg-primary shadow-sm">
                            <h3 className="sr-only">Items in your cart</h3>
                            <ul role="list" className="divide-y divide-gray-300">
                                {products.map((product) => (
                                    <li key={product.id} className="flex px-4 py-6 sm:px-6">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-36"
                                            />
                                        </div>

                                        <div className="ml-6 flex flex-1 flex-col">
                                            <div className="flex">
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="text-sm">
                                                        <a
                                                            href={product.name}
                                                            className="font-medium text-gray-700 hover:text-gray-800"
                                                        >
                                                            {product.name}
                                                        </a>
                                                    </h4>

                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {product.size}
                                                    </p>
                                                </div>

                                                <div className="ml-4 flow-root flex-shrink-0">
                                                    <button
                                                        type="button"
                                                        className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                                                        onClick={() => {
                                                            removeFromCart(product.id);
                                                            calculateTotals();
                                                        }}
                                                    >
                                                        <span className="sr-only">Remove</span>
                                                        <HiTrash className="h-5 w-5" aria-hidden="true"/>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex flex-1 items-end justify-between pt-2">
                                                <p className="mt-1 text-sm font-medium text-gray-900">
                                                    {product.quantity} items x ${product.price}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <dl className="space-y-6 border-t border-gray-300 px-4 py-6 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">Subtotal</dt>
                                    <dd className="text-sm font-medium text-blackPrimary">
                                        ${total}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">Shipping</dt>
                                    <dd className="text-sm font-medium text-blackPrimary">
                                        $5.00
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">Taxes</dt>
                                    <dd className="text-sm font-medium text-blackPrimary">
                                        ${tax}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-300 pt-6">
                                    <dt className="text-base font-medium">Total</dt>
                                    <dd className="text-base font-medium text-blackPrimary">
                                        ${orderTotal}
                                    </dd>
                                </div>
                            </dl>

                            <div className="border-t border-gray-300 px-4 py-6 sm:px-6">
                                <button
                                    type="submit"
                                    className="w-full h-14 bg-white text-blackPrimary hover:bg-gray-100 cursor-pointer text-xl max-sm:h-10 max-sm:text-xl max-[460px]:text-lg max-[360px]:h-9">
                                    Confirm order
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;