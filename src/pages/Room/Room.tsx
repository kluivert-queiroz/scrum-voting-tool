import VotingCard from "../../components/VotingCard";
import useVotingPeers from "../../hooks/useVotingPeers";

const Room = () => {
  const votingPeers = useVotingPeers();
  return (
    <div>
      {votingPeers.map(({ id, vote }) => (
        <VotingCard key={id} vote={vote} />
      ))}
    </div>
  );
};

export default Room;
