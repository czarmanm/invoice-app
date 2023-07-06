export const invoice = {
    id: 10,
    invoiceName: 'PC components',
    client: {
        firstname: 'John',
        lastname: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: "One str.",
            number: 12,
        }
    },
    company: {
        companyName: 'New Egg',
        fiscalNumber: 12345
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i7',
            price: 499,
            quantity: 1,
        },
        {
            id: 2,
            product: 'Corsair keyboard mechanical',
            price: 150,
            quantity: 2,
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 350,
            quantity: 1,
        }
    ]
}