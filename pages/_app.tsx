import 'semantic-ui-css/semantic.min.css'
import '../styles/global.css'
import { Container, Segment } from 'semantic-ui-react'
import { GlobalProvider, useGlobalContext } from 'context/global'
import Navigator from 'src/components/navigator'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: any) {
  return (
    <GlobalProvider>
      <Wrapper
        Component={Component}
        pageProps={pageProps}
      />
    </GlobalProvider>
  )
}

function Wrapper({ Component, pageProps }: any) {
  const { state: { isLoading } } = useGlobalContext()
  const router = useRouter()

  return (
    <Container fluid>
      <Navigator
        router={router}
      />

      <Segment
        loading={isLoading}
        fluid
        style={{ borderRadius: 0, margin: 0, height: '93vh', minHeight: '93vh', maxHeight: '93vh' }}
      >
        <Component {...pageProps} />
      </Segment>
    </Container>
  )
}

export default MyApp
