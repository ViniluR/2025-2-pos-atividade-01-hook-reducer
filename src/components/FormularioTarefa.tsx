import { useState } from "react";


import type { Tarefa } from "../types/tarefa";

interface FormularioTarefaProps {
  onAdicionar: (tarefa: Tarefa) => void;
  textoBotao?: string;
  titulo?: string;
  descricao?: string;
  disabled?: boolean;
}

export default function FormularioTarefa({ onAdicionar, textoBotao = "Adicionar tarefa", titulo: tituloInicial = "", descricao: descricaoInicial = "", disabled = false }: FormularioTarefaProps) {
  const [titulo, setTitulo] = useState(tituloInicial);
  const [descricao, setDescricao] = useState(descricaoInicial);
  const [carregando, setCarregando] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!titulo.trim()) return;
    setCarregando(true);
    const novaTarefa: Tarefa = {
      id: Date.now().toString(),
      titulo,
      descricao,
      concluida: false,
    };
    Promise.resolve(onAdicionar(novaTarefa)).finally(() => {
      setCarregando(false);
      setTitulo("");
      setDescricao("");
    });
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex', flexDirection: 'column', gap: '1em', background: '#222f45ff', padding: '2em', borderRadius: '.5em', boxShadow: '0 6px 18px #0004', maxWidth: 500, margin: '2em auto', color: '#e9ecf7'
    }}>
      <label>
        Título
          <input
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
            style={{ width: '100%', padding: '.7em', borderRadius: '.5em', border: '1px solid #0a2342', marginTop: '.3em', background: '#e9ecf7', color: disabled ? '#616264ff' : '#0a2342', outline: 'none', cursor: disabled ? 'not-allowed' : 'text' }}
            onFocus={e => e.currentTarget.style.outline = 'none'}
            onBlur={e => e.currentTarget.style.outline = 'none'}
            disabled={disabled}
          />
      </label>
      <label>
        Descrição
          <textarea
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
            required
            style={{ width: '100%', padding: '.7em', borderRadius: '.5em', border: '1px solid #0a2342', marginTop: '.3em', background: '#e9ecf7', color: disabled ? '#616264ff' : '#0a2342', minHeight: 80, outline: 'none', cursor: disabled ? 'not-allowed' : 'text' }}
            onFocus={e => e.currentTarget.style.outline = 'none'}
            onBlur={e => e.currentTarget.style.outline = 'none'}
            disabled={disabled}
          />
      </label>
        <button type="submit" style={{ background: disabled ? 'red' : 'green', color: '#e9ecf7', border: 'none', borderRadius: '.5em', padding: '.7em 1.5em', fontWeight: 500, cursor: 'pointer', marginTop: '1em' }} disabled={carregando}>
          {carregando ? '...' : textoBotao}
      </button>
    </form>
  );
}
