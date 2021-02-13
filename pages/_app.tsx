import 'semantic-ui-css/semantic.min.css'
import '../styles/global.css'
import { Container, Segment } from 'semantic-ui-react'

function MyApp({ Component, pageProps }: any) {
  return (
    <Container fluid>
      <Segment fluid loading style={{ height: '100%', minHeight: '100%', maxHeight: '100%' }}>
        <Component {...pageProps} />
      </Segment>
    </Container>
  )
}

export default MyApp
