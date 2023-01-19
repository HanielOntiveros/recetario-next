export default {
  name: 'recipe',
  type: 'document',
  title: 'Recipe',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'preparationtime',
      type: 'string',
      title: 'Preparation Time',
    },
    {
      name: 'cookingtime',
      type: 'string',
      title: 'Cooking Time',
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
      ],
    },
    {
      name: 'place',
      type: 'string',
      title: 'Place',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },

    {
      name: 'preparation',
      type: 'text',
      title: 'Preparation',
    },
  ],
}
