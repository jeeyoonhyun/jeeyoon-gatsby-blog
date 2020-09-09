export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5845b40686c08dbbdcc6bd',
                  title: 'Sanity Studio',
                  name: 'jeeyoon-gatsby-blog-studio',
                  apiId: '5423b734-b0b3-4b76-ad25-31c50ef7a3ba'
                },
                {
                  buildHookId: '5f5845b4281634c2df95940c',
                  title: 'Blog Website',
                  name: 'jeeyoon-gatsby-blog',
                  apiId: '8d9f844d-eebf-42d7-8e00-68d1249ee6ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeeyoonhyun/jeeyoon-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://jeeyoon-gatsby-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
