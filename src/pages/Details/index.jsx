import { Container, Links } from './styles.js'
import { Header } from '../../components/Header/index.jsx'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
export function Details() {
    return (
        <Container>
          <Header/>
          <ButtonText title="excluir nota"/>
          <Section title="Links Úteis">
            <Links>
              <li><a href="https://aprovadoapp.com/"></a>Link 1</li>
              <li><a href="https://aprovadoapp.com/"></a>Link 2</li>
              <li><a href="https://aprovadoapp.com/"></a>Link 3</li>
            </Links>
          </Section>
          <Section title="Marcadores">
              <Tag title="express"/>
              <Tag title="nodejs"/>
          </Section>  

          <Button title="Voltar"/>
        </Container>

    )
}