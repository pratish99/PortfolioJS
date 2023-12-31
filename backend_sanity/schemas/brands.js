export default {
    name: 'brands',
    title: 'Brands',
    type: 'document',
    fields: [
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: 'true',
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        }
    ]
}