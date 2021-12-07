import { Pipe } from 'api/types';

export const sortByName: (pipe: Pipe[]) => Pipe[] = (pipes) => {
  return pipes
    .slice() // clone pipes array
    .map(pipe => ({ ...pipe, name: pipe.name.trim() })) // trims pipe names (remove spaces around)
    .sort((a, b) => a.name > b.name && 1 || -1) // sorting
}