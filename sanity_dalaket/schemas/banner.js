export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            },
        },
        {
            name: 'featured',
            title: 'Featured',
            type: 'string',
        },
        {
            name: 'theme',
            title: 'Theme',
            type: 'string',
        },
    ]
}