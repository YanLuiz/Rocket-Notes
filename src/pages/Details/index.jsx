import { Container, Links } from './styles.js'
import { Header } from '../../components/Header/index.jsx'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
export function Details() {
    return (
        <Container>
          <Header/>
          <Section title="Links Úteis">
            <Links>
              <li><a href="https://aprovadoapp.com/"></a>Link 1</li>
              <li><a href="https://aprovadoapp.com/"></a>Link 2</li>
              <li><a href="https://aprovadoapp.com/"></a>Link 3</li>
            </Links>
          </Section>
          <Button title="Voltar"/>
        </Container>

    )
}