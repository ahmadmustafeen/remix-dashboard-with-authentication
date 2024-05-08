import { Flex, Text } from "@mantine/core";

interface authfooterProp{
  hasMargin?: boolean;
}

export default function AUTHFOOTER({hasMargin}:authfooterProp) {
  return (
    <Flex
      direction={"column"}
      mt={30}
      ml={{ base: 0, sm:hasMargin ? 0 : 30, lg: hasMargin ? -40 : 0  }}
      align={"center"}
      justify={"center"}
      w={{ base: "250", md: "350", lg: hasMargin ?  "430" : "400" }}
      //   bg={"red"}
    >
      <Text ta={"center"} c={"#A0AEC0"} fw={400} size="14px" >
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
