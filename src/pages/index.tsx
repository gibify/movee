import { useCallback, useRef, useState } from "react";
import { FiGithub, FiLogIn }  from "react-icons/fi";

import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '../styles/pages/Login.module.css';



export default function Login() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [username, setUsername] = useState('');

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(true);
  }, []);

  const { push } = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    if(username) {
      push(`/${username}`);
    }
  }


  return (
    <div className={styles.container}>
      <Head>
        <title> Login | Movee</title>
      </Head>

      <div className={styles.content}>
        
        <img src="/logo-text.svg" alt=""/>
        <strong>Bem-Vindo</strong>

        <div className={styles.title}>
          <FiGithub size={32}/>
          <span>Faça login com o seu GitHub para iniciar a sessão</span>
        </div>

        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          placeholder="Digite seu username"
          onChange={(event) => setUsername(event.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          />
          <button type="submit">
          <FiLogIn />
          </button>
        </form>

      </div>
    </div>
    
  )
}