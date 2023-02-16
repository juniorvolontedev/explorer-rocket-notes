import { useEffect, useState } from "react";
import { Container, Links, Content } from "./styles.js";
import { useParams, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header/";
import { Section } from "../../components/Section/";
import { Button } from "../../components/Button/";
import { ButtonText } from "../../components/ButtonText/";
import { Tag } from "../../components/Tag/";
import { api } from "../../services/api.js";

export function Details() {
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  const params = useParams();

  function handleBack() {
    navigate("/");
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  });

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a target="_blank" href={link.url}>
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={tag.id} title={tag.name} />
                ))}
              </Section>
            )}

            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
