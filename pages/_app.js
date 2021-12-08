import '@styles/globals.css'

function MyApp({ Component, pageProps }) {
  const Layout =Component.Layout

  //why in course 116. web3 provider doesn't work with <baselayout> on index.js
  return(<Layout> <Component {...pageProps} /></Layout>)
}

export default MyApp
