import React, {createContext, useCallback, useEffect, useState} from 'react';
import {MatchContextValues, MatchProps} from './types';

export const MatchContext = createContext({} as MatchContextValues);

const MATCH_PROFILE = {
  image: ['test'],
};

export const MatchProvider = ({children}: MatchProps): JSX.Element => {
  const [loadingMatch, setLoadingMatch] = useState(false);
  const [matches, setMatches] = useState<any>([]);

  const getMatches = useCallback(async () => {
    setLoadingMatch(true);
    try {
      setMatches([MATCH_PROFILE]);
    } catch (error) {
    } finally {
      setLoadingMatch(false);
    }
  }, []);

  useEffect(() => {
    getMatches();
  }, [getMatches]);

  const contextValues: MatchContextValues = {
    loadingMatch,
    getMatches,
    matches,
  };

  return (
    <MatchContext.Provider value={contextValues}>
      {children}
    </MatchContext.Provider>
  );
};
