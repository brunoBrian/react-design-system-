import './styles/global.css'

import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/Input'
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'
import ReactLogo from './assets/react-logo.svg'

export function App() {
  return (
    <main className='flex justify-center items-center w-screen h-screen flex-col bg-gray-900'>
      <div className='w-[100%] sm:w-[400px] px-4 sm:px-0'>
        <header className='flex justify-center items-center flex-col mb-8'>
          <img src={ReactLogo} alt="Logo react" className='mb-4' />
          <Heading size='lg'><h1 className='text-gray-100'>Ignite Lab</h1></Heading>
          <Heading size='md' className='text-gray-400 font-normal'>Faça login e comece a usar</Heading>
        </header>

        <form>
          <label htmlFor='email' className='flex gap-2 flex-col mb-4'>
            <Text size='md' className='text-gray-400'>Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input id='email' placeholder='Digite seu e-mail' type='email' />
            </TextInput.Root>
          </label>

          <label htmlFor='password' className='flex gap-2 flex-col'>
            <Text size='md' className='text-gray-400'>Senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input id='password' placeholder='**********' type='password' />
            </TextInput.Root>
          </label>

          <label htmlFor='accept' className='flex items-center gap-2 mb-8 mt-3'>
            <Checkbox id='accept' />
            <Text size='sm' className='text-gray-200'>Lembrar-me de mim por 30 dias</Text>
          </label>

          <Button type='submit'>Entrar na plataforma</Button>

          <div className='flex flex-col items-center gap-2 mt-8'>
            <Text asChild size='sm'>
              <a href='#' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
            </Text>

            <Text asChild size='sm'>
              <a href='#' className='text-gray-400 underline hover:text-gray-200'>Não possui uma conta? Crie agora!</a>
            </Text>
          </div>
        </form>
      </div>
    </main>
  )
}