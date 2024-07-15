import { Container, H1, TopoDoSite, Form, ConteinerInput, Input, InputLabel, Button } from "./styles"
import UsersImage from './assets/users.png'


function App() {

  return (
    <Container>
      <TopoDoSite>
        <img src={UsersImage} />
      </TopoDoSite>

      <Form>
        <H1>Cadastro de Usuario</H1>

        <ConteinerInput>
          <div>
            <div>
              <InputLabel>
              Nome<span>*</span>
              </InputLabel>
              <Input type="Nome" placeholder="Digite seu Nome" />
            </div>

            <div>
              <InputLabel>
              idade<span>*</span>
              </InputLabel>
              <Input type="Idade" placeholder="Digite Sua idade" />
            </div>

            <div>
              <InputLabel>
              Telefone<span>*</span>
              </InputLabel>
              <Input type="Telefone" placeholder="Digite seu Numero de Telefone" />
            </div>

          </div>

        </ConteinerInput>

        <Button>Cadastrar Usuario</Button>
      </Form>
    </Container>

  )
}

export default App

