export default{
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxlength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            //possibly need check for integer value
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'isSold',
            title: 'IsSold',
            type: 'boolean',
        }
    ],
};