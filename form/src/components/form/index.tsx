import React, { useCallback, useState } from 'react';
import Button from '../button';

interface IFormState {
  email: string;
  password: string;
  stayLoggedIn: boolean;
}

const Form = () => {

  const [formState, setFormState] = useState<IFormState>({
    email: '',
    password: '',
    stayLoggedIn: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { email, password } = formState;

      if (!email || !password) {

        window.alert("Preencha todos os campos!");

        setIsLoggedIn(false);

        return;
      }

      setIsLoggedIn(true);
    },
    [formState]
  );

  if (isLoggedIn) {
    return (
      <div className='container mt-5'>
        <p className="fs-1 mb-5">Página da Gestão Financeira</p> 
      </div>
    );
  }

  return (
    <div className='container mt-5'>
      <p className="fs-1 mb-5">Entrar</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">

            <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name='email' 
              required
              value={formState.email}

              onChange={(event) => setFormState({
                ...formState,
                email: event.currentTarget?.value || "",
              })
              }
              />
          </div>
          <div className="mb-3">

            <label htmlFor="exampleInputPassword1" className="htmlForm-label">Senha</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              name='password' 
              required
              value={formState.password}
              
              onChange={(event) => setFormState({
                ...formState,
                password: event.currentTarget?.value || "",
              })
              }
              />

          </div>
          <div className="mb-3 htmlForm-check">

            <input 
              type="checkbox" 
              className="htmlForm-check-input" 
              id="stayLoggedIn"
              checked={formState.stayLoggedIn}
              
              onChange={(event) => setFormState({
                ...formState,
                stayLoggedIn: !!event.currentTarget?.checked
              })
              }
              />
            <label className="form-check-label" htmlFor="exampleCheck1">Mantenha-me logado</label>

          </div>

           <Button/> 
          
          

        </form>
    </div>
  );
}

export default Form;
