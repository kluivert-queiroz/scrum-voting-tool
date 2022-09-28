const mockedPeers = [
  { id: 123, vote: 1 },
  { id: 456, vote: 5 },
];
const useVotingPeers = () => {
  // TODO check connected peers
  return mockedPeers;
};

export default useVotingPeers;
