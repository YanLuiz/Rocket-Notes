import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

export function Header () {
    return (
        <Container>
            <Profile to="/profile">
                <img src="http://github.com/YanLuiz.png" alt="foto do usuário"/>

                <div>
                    <span>
                        Bem Vindo
                    </span>
                    <strong>Yan Luiz</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}