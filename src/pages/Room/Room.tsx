import VotingCard from "../../components/VotingCard";
import useVotingPeers from "../../hooks/useVotingPeers";

const Room = () => {
  const votingPeers = useVotingPeers();
  return votingPeers.map(({ id, vote }) => <VotingCard key={id} vote={vote} />);
};

export default Room;
