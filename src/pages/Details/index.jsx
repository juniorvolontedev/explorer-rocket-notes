import { Container, Links, Content } from "./styles.js";

import { Header } from "../../components/Header/";
import { Section } from "../../components/Section/";
import { Button } from "../../components/Button/";
import { ButtonText } from "../../components/ButtonText/";
import { Tag } from "../../components/Tag/";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            delectus perspiciatis voluptates distinctio nihil! Magni nam
            recusandae maxime natus deleniti, eveniet ratione quis pariatur at
            aperiam obcaecati tempore cupiditate! Blanditiis?
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
