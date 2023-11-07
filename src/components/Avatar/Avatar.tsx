import { Box, Text } from "@nimbus-ds/components";

interface AvatarProps {
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ name }: AvatarProps) => {
  const initial = name.substr(0, 1).toUpperCase();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="1"
      borderRadius="full"
      backgroundColor="primary-surface"
      width="1.25rem"
      height="1.25rem"
    >
      <Text fontWeight="bold" fontSize="caption" color="primary-interactive">
        {initial}
      </Text>
    </Box>
  );
};

export default Avatar;
