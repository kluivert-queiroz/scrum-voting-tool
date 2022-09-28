export interface VotingCardProps {
  vote: number;
}
const VotingCard = ({ vote }: VotingCardProps) => {
  return <div>Voting Card: {vote}</div>;
};

export default VotingCard;
