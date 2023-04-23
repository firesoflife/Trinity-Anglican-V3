export default
(
  {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the author'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'A short biography of the author'
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      description: 'The image of the author'
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      description: 'The website of the author'
    }
  ]
}
)