import 'semantic-ui-css/semantic.min.css'
import '../styles/global.css'
import { Container, Segment, Breadcrumb } from 'semantic-ui-react'

function MyApp({ Component, pageProps }: any) {
  return (
    <Container fluid>
      <Segment inverted style={{ borderRadius: 0, margin: 0 }}>
        <Breadcrumb>
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider style={{ color: 'white' }} />
          <Breadcrumb.Section active>Search</Breadcrumb.Section>
        </Breadcrumb>
      </Segment>

      <Segment
        fluid
        inverted
        style={{ borderRadius: 0, margin: 0, height: '95vh', minHeight: '95vh', maxHeight: '95vh' }}
      >
        <Component {...pageProps} />
      </Segment>
    </Container>
  )
}

export default MyApp
