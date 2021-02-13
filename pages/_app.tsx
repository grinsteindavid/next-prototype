import 'semantic-ui-css/semantic.min.css'
import '../styles/global.css'
import { Container, Segment } from 'semantic-ui-react'
import { GlobalProvider, useGlobalContext } from 'context/global'
import Navigator from 'components/navigator'

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

  return (
    <Container fluid>
      <Navigator />

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
