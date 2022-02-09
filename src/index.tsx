 import ReactComponent from './ReactComponent'

const plugin /*: PluginDescriptor */ = {
  id: 'org.craftercms.sampleComponentLibraryPlugin',
  name: 'Yoast Plugin',
  description: '',
  author: '',
  logo: null,
  apps: [
    {
      route: '/yada-yada',
      widget: { id: 'org.craftercms.sampleComponentLibraryPlugin.components.reactComponent' }
    }
  ],
  widgets: {
    'org.craftercms.sampleComponentLibraryPlugin.components.reactComponent': ReactComponent
  },
  scripts: [
    {
      src: 'https://code.jquery.com/jquery-3.5.1.min.js',
      integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
      crossorigin: 'anonymous'
    },
    'script.js'
  ],
  stylesheets: ['index.css'],
  themes: []
}

export { ReactComponent }

export default plugin
