import client from './contentful'

export async function getAllProducts() {
    const entries = await client.getEntries({
        content_type: 'cosmeticsECommerceShop' // Replace with your content type ID
    })

    return entries.items
}

export async function getProductBySlug(slug) {
    const entries = await client.getEntries({
        content_type: 'cosmeticsECommerceShop',
        'fields.slug': slug
    })

    return entries.items[0]
}