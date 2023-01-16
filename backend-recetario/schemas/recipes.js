export default {
  name: 'recipes',
  type: 'document',
  title: 'Recipes',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      type: 'array',
      name: 'ingredients',
      of: [
        {
          type: 'string',
          title: 'Author',
        },
      ],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
}
