export default function ContactPage() {
    return (
        <div>
            {/* Hero Section */}
            <div className="py-24 px-10 max-sm:py-12 max-[450px]:px-5 text-center">
                <h1 className="text-6xl font-light mb-6 max-sm:text-4xl max-[450px]:text-3xl">
                    Contact Us
                </h1>
                <p className="text-xl font-light max-w-4xl mx-auto max-sm:text-lg max-[450px]:text-base">
                    Get in touch with our beauty experts for personalized recommendations,
                    product inquiries, or any questions about our luxury cosmetics collection.
                </p>
            </div>

            {/* Contact Form and Info Section */}
            <div className="flex justify-around items-start py-16 gap-10 px-32 max-xl:flex-col max-lg:px-10 max-[450px]:px-5 max-sm:py-8 max-[450px]:gap-5">
                {/* Contact Form */}
                <div className="w-full max-w-[600px]">
                    <h2 className="text-4xl font-light mb-8 max-sm:text-3xl max-[450px]:text-2xl">
                        Send us a Message
                    </h2>
                    <form className="space-y-6 max-[450px]:space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-4 bg-transparent border border-gray-300 text-lg font-light focus:outline-none focus:border-white/40 max-sm:text-base max-sm:p-3"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-4 bg-transparent border border-gray-300 text-lg font-light focus:outline-none focus:border-white/40 max-sm:text-base max-sm:p-3"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-4 bg-transparent border  border-gray-300 text-lg font-light focus:outline-none focus:border-white/40 max-sm:text-base max-sm:p-3"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Your Message"
                                rows="6"
                                className="w-full p-4 bg-transparent border  border-gray-300 text-lg font-light focus:outline-none focus:border-white/40 resize-none max-sm:text-base max-sm:p-3"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 border border-white text-lg font-light hover:bg-white hover:text-black transition-colors duration-300 max-sm:text-base max-sm:py-3"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="w-full max-w-[500px]">
                    <h2 className="text-4xl font-light mb-8 max-sm:text-3xl max-[450px]:text-2xl">
                        Get in Touch
                    </h2>
                    <div className="space-y-8 max-[450px]:space-y-6">
                        <div>
                            <h3 className="text-2xl font-normal mb-4 max-sm:text-xl">Address</h3>
                            <p className="text-lg font-light max-sm:text-base">
                                123 Beauty Boulevard<br />
                                Luxury District<br />
                                New York, NY 10001
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-normal mb-4 max-sm:text-xl">Phone</h3>
                            <p className="text-lg font-light max-sm:text-base">
                                +1 (555) 123-4567
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-normal mb-4 max-sm:text-xl">Email</h3>
                            <p className="text-lg font-light max-sm:text-base">
                                hello@luxurycosmetics.com<br />
                                support@luxurycosmetics.com
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-normal mb-4 max-sm:text-xl">Business Hours</h3>
                            <p className="text-lg font-light max-sm:text-base">
                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                Saturday: 10:00 AM - 4:00 PM<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="border-y border-white border-1 py-24 px-32 max-lg:px-10 max-[450px]:px-5 max-[450px]:py-12">
                <h2 className="text-5xl font-light text-center mb-16 max-sm:text-4xl max-sm:mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-4xl mx-auto space-y-8 max-[450px]:space-y-6">
                    <div>
                        <h3 className="text-2xl font-normal mb-4 max-sm:text-xl">How can I track my order?</h3>
                        <p className="text-lg font-light max-sm:text-base">
                            Once your order ships, you'll receive a tracking number via email.
                            You can use this number to track your package on our website or
                            the carrier's tracking page.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-normal mb-4 max-sm:text-xl">What is your return policy?</h3>
                        <p className="text-lg font-light max-sm:text-base">
                            We offer a 30-day return policy for unopened products in their
                            original packaging. Please contact our customer service team
                            to initiate a return.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-normal mb-4 max-sm:text-xl">Do you offer personalized consultations?</h3>
                        <p className="text-lg font-light max-sm:text-base">
                            Yes! Our beauty experts are available for personalized
                            consultations to help you find the perfect products for
                            your skin type and preferences.
                        </p>
                    </div>
                </div>
            </div>

            {/* Customer Support Section */}
            <div className="py-24 px-10 max-sm:py-12 max-[450px]:px-5 text-center">
                <h2 className="text-4xl font-light mb-6 max-sm:text-3xl max-[450px]:text-2xl">
                    Need Immediate Assistance?
                </h2>
                <p className="text-lg font-light mb-8 max-w-3xl mx-auto max-sm:text-base">
                    Our customer support team is here to help you with any questions
                    about our products, orders, or beauty recommendations.
                </p>
                <div className="flex justify-center gap-8 max-sm:flex-col max-sm:gap-4">
                    <button className="px-8 py-3 border border-white text-lg font-light hover:bg-white hover:text-black transition-colors duration-300 max-sm:text-base">
                        Live Chat
                    </button>
                    <button className="px-8 py-3 border border-white text-lg font-light hover:bg-white hover:text-black transition-colors duration-300 max-sm:text-base">
                        Call Us Now
                    </button>
                </div>
            </div>
        </div>
    );
}