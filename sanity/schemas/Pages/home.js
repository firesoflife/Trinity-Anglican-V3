export default 
  (
    {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
      {
        name: 'pageTitle',
        title: 'Page Title',
        type: 'string'
      },
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image'
      },
      {
        name: 'heroHeading',
        title: 'Hero Heading',
        type: 'string'
      },
      {
        name: 'heroSubheading',
        title: 'Hero Subheading',
        type: 'string'
      },
      {
        name: 'aboutSection',
        title: 'About Section',
        type: 'object',
        fields: [
          {
            name: 'aboutHeading',
            title: 'About Heading',
            type: 'string'
          },
          {
            name: 'aboutText',
            title: 'About Text',
            type: 'text'
          }
        ]
      },
      {
        name: 'eventsSection',
        title: 'Events Section',
        type: 'object',
        fields: [
          {
            name: 'eventsHeading',
            title: 'Events Heading',
            type: 'string'
          },
          {
            name: 'events',
            title: 'Events',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'event' } }]
          }
        ]
      },
      {
        name: 'sermonsSection',
        title: 'Sermons Section',
        type: 'object',
        fields: [
          {
            name: 'sermonsHeading',
            title: 'Sermons Heading',
            type: 'string'
          },
          {
            name: 'sermons',
            title: 'Sermons',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'sermon' } }]
          }
        ]
      },
      {
        name: 'blogSection',
        title: 'Blog Section',
        type: 'object',
        fields: [
          {
            name: 'blogHeading',
            title: 'Blog Heading',
            type: 'string'
          },
          {
            name: 'blogPosts',
            title: 'Blog Posts',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'post' } }]
          }
        ]
      }
    ]
  }

)