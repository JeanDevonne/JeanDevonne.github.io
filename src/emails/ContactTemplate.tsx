import { Html, Head, Body, Text, Section, Row, Column } from "@react-email/components";

export function ContactTemplate({ name, email, message }: { name: string; email: string; message: string }) {
  return (
    <Html>
      <Head />
      <Body>
        <Section>
          <Row>
            <Column>
              <Text>Nuevo mensaje de contacto</Text>
              <Text>Nombre: {name}</Text>
              <Text>Email: {email}</Text>
              <Text>Mensaje: {message}</Text>
            </Column>
          </Row>
        </Section>
      </Body>
    </Html>
  );
}