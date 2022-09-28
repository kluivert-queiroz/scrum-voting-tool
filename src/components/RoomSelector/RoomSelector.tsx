import { Button, Center, Input, Stack } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";
const RoomSelector = () => {
  const [roomId, setRoomId] = useState("");
  const handleRoomInputChange = (e: any) => {
    setRoomId(e.target.value);
  };
  return (
    <Stack>
      <Input
        radius="xl"
        size="xl"
        placeholder="Room ID"
        value={roomId}
        onChange={handleRoomInputChange}
      />
      <Center inline>
        <Button 
				disabled={!roomId}
				variant="light" component={Link} to={`room/${roomId}`}>
          Join room
        </Button>
        <Button variant="filled">Create new room</Button>
      </Center>
    </Stack>
  );
};

export default RoomSelector;
