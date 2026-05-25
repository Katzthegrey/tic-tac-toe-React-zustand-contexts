import React from 'react';
import useLeaderboardStore from '../../contexts/leaderboardStore';
import styled from 'styled-components';
import NiceAvatar from 'react-nice-avatar';
import { createAvatarConfig } from '../../Components/Player/avatars';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  font-family: 'Pacifico', cursive;
`;

const LeaderboardTable = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 60px 1fr 80px;
  gap: 10px;
  padding: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 10px;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 50px 60px 1fr 80px;
  gap: 10px;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

const Rank = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
  color: ${({ $rank, theme }) => {
    if ($rank === 1) return '#FFD700';
    if ($rank === 2) return '#C0C0C0';
    if ($rank === 3) return '#CD7F32';
    return theme.colors.text;
  }};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: 'Poppins', sans-serif;
  
  i {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
  }
`;

const ClearButton = styled.button`
  margin-top: 1rem;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Details = () => {
  const { entries, clearLeaderboard } = useLeaderboardStore();
  
  return (
    <DetailsContainer>
      <Title>Leaderboard</Title>
      
      <LeaderboardTable>
        {entries.length > 0 ? (
          <>
            <TableHeader>
              <span>Rank</span>
              <span>Avatar</span>
              <span>Name</span>
              <span>Score</span>
            </TableHeader>
            
            {entries.map((entry, index) => (
              <TableRow key={entry.id}>
                <Rank $rank={index + 1}>#{index + 1}</Rank>
                <NiceAvatar
                  style={{ width: '40px', height: '40px' }}
                  {...createAvatarConfig(entry.player)}
                />
                <span>{entry.name}</span>
                <span><strong>{entry.score}</strong></span>
              </TableRow>
            ))}
            
            <ClearButton onClick={clearLeaderboard}>
              Clear Leaderboard
            </ClearButton>
          </>
        ) : (
          <EmptyState>
            <i className="fas fa-trophy"></i>
            <p>No entries yet!</p>
            <p>Complete a game and add your score to the leaderboard.</p>
          </EmptyState>
        )}
      </LeaderboardTable>
    </DetailsContainer>
  );
};

export default Details;