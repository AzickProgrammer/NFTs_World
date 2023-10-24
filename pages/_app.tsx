import { ChakraProvider, Container } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react' // Import extendTheme for theme customization
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { Navbar } from '../components/Navbar'
import { AppProps } from 'next/app'

const activeChain = 'mumbai'

const theme = extendTheme({
  // Your theme customization goes here
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <ChakraProvider theme={theme}>
        <Container maxW={'1200px'}>
          <Navbar />
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
