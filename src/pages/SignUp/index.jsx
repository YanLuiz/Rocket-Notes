import { Container, Form, Background } from './styles'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'
import {FiMail, FiLock,FiUser} from 'react-icons/fi';
import { Link } from 'react-router-dom'


export function SignUp() {
    return (
        <Container>
          <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links</p>

                <h2>Crie sua conta</h2>
                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />
                <section>
                    <Button title="Cadastrar"/>
                    <Link to="/">
                         <ButtonText title="Voltar para o login"/>
                    </Link>
                
                </section>
                

                

            </Form>

        </Container>
    )
}