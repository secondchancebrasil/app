import {ReactNode} from 'react';

export interface MatchProps {
  children: ReactNode;
}

export interface MatchContextValues {
  loadingMatch: boolean;
  getMatches(): void;
  matches: any;
}
