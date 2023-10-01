import { Container, Links, Content } from './styles.js'
import { Header } from '../../components/Header/index.jsx'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
export function Details() {
    return (
    <Container>
      <Header/>

        <main>
         <Content>



            
          <ButtonText title="excluir nota"/>
          <h1>
            Introdução ao React
          </h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsam nostrum optio ipsa, voluptatibus consequatur nesciunt ipsum vel velit fugiat, tempore accusantium explicabo inventore! Dignissimos architecto nobis enim harum rem.</p>

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

        </Content>
      </main>
    </Container>

    )
}