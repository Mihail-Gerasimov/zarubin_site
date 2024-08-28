import { getTeamMetadata } from '@/src/utils/getTeamMetadata';
import { TeamClient } from './TeamClient';

export const Team = () => {
  const getAllTeam = () => {
    const teamMetadata = getTeamMetadata('src/team');
    return teamMetadata;
  };

  const team = getAllTeam();

  return <TeamClient team={team} />;
};
