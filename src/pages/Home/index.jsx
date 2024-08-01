import { useRef } from "react"

import { Container, H1, TopoDoSite, Form, ConteinerInput, Input, InputLabel, Button } from "./styles"
import UsersImage from '../../assets/photo1.jpg'


function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputTelephone = useRef()

  function RegisterNewUser(){
    console.log(inputName)
  }

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
              <Input type="Nome" placeholder="Digite seu Nome" ref={inputName} />
            </div>

            <div>
              <InputLabel>
                idade<span> *</span>
              </InputLabel>
              <Input type="Horario" placeholder="Digite seu Horário" ref={inputAge}/>
            </div>

          

        </ConteinerInput>

        <div>
          <InputLabel>
            Telefone<span> *</span>
          </InputLabel>
          <Input type="Telefone" placeholder="Digite seu Numero de Telefone" ref={inputTelephone} />
        </div>

        <Button type="button" onClick={RegisterNewUser}>Cadastrar Usuario</Button>
      </Form>
    </Container>

  )
}

export default Home

