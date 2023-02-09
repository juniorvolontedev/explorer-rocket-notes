import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/juniorvolontedev.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Junior Volonte</strong>
        </div>
      </Profile>
    </Container>
  );
}
