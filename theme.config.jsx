export default {
  logo: (
    <>
      <span>Bytehub+ Documentation</span>
    </>
  ),
  project: {
    link: 'https://github.com/bytehubplus/bytehubplus.github.io',
  },
  docsRepositoryBase: 'https://github.com/bytehubplus/bytehubplus.github.io',
  editLink: {
    text: '修改本页',
  },
  footer: {
    text: `MIT ${new Date().getFullYear()} © Bytehub+ Community`,
  },
  getNextSeoProps() {
    return {
      titleTemplate: '%s',
    }
  },
  titleSuffix: '',
  // ...
}
