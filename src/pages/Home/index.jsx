import { Container, H1, TopoDoSite, Form, ConteinerInput, Input, InputLabel, Button } from "./styles"
import UsersImage from '../../assets/photo1.jpg'


function App() {

  return (
    <Container>
      <TopoDoSite>
        <img src={UsersImage} />
      </TopoDoSite>

      <Form>
        <H1>New Style </H1>

        <ConteinerInput>
          
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type="Nome" placeholder="Digite seu Nome" />
            </div>

            <div>
              <InputLabel>
                idade<span> *</span>
              </InputLabel>
              <Input type="Horario" placeholder="Digite seu Horário" />
            </div>

          

        </ConteinerInput>

        <div>
          <InputLabel>
            Telefone<span> *</span>
          </InputLabel>
          <Input type="Telefone" placeholder="Digite seu Numero de Telefone" />
        </div>

        <Button>Cadastrar Usuario</Button>
      </Form>
    </Container>

  )
}

export default App

