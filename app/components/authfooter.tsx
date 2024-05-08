import { Flex, Text } from "@mantine/core";

export default function AUTHFOOTER() {
  return (
    <Flex
      direction={"column"}
      mt={30}
      ml={{ base: 0, sm: 0, lg: -40 }}
      align={"center"}
      justify={"center"}
      w={{ base: "250", md: "350", lg: "430" }}
      //   bg={"red"}
    >
      <Text c={"#A0AEC0"} fw={400} size="14px" className="">
        @ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
      </Text>
      <Flex
        w={"100%"}
        direction={"row"}
        justify={"space-evenly"}
        gap={10}
        mt={10}
      >
        <Text c={"#A0AEC0"} fw={400} size="14px">
          Marketplace
        </Text>
        <Text c={"#A0AEC0"} fw={400} size="14px">
          Blog
        </Text>
        <Text c={"#A0AEC0"} fw={400} size="14px">
          License
        </Text>
      </Flex>
    </Flex>
  );
}
