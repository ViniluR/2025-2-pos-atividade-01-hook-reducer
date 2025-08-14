import { Tarefa } from '../types/tarefa';

export type TarefasAction =
  | { type: 'adicionar'; tarefa: Tarefa }
  | { type: 'editar'; tarefa: Tarefa }
  | { type: 'remover'; id: string }
  | { type: 'concluir'; id: string };

export function tarefasReducer(state: Tarefa[], action: TarefasAction): Tarefa[] {
  switch (action.type) {
    case 'adicionar':
      return [...state, action.tarefa];
    case 'editar':
      return state.map(t => t.id === action.tarefa.id ? action.tarefa : t);
    case 'remover':
      return state.filter(t => t.id !== action.id);
    case 'concluir':
      return state.map(t =>
        t.id === action.id ? { ...t, concluida: !t.concluida } : t
      );
    default:
      return state;
  }
}
