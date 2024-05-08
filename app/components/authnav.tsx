import { Button, Flex, Text, Group } from "@mantine/core";
import { Link } from "@remix-run/react";
import {
  IconBox,
  IconUser,
  IconUserCircle,
  IconKeyFilled,
} from "@tabler/icons-react";

export default function AUTHNAV() {
  return (
    <Flex
      className="absolute"
      display={{
        base: "none",
        md: "flex",
      }}
      mt={"24px"}
      w={"100%"}
      h={"60"}
    >
      <Group
        w={"70%"}
        mx="auto"
        p={"2px"}
        className="rounded-[10px]"
      >
        <Flex
          w={"100%"}
          h="100%"
          mx="auto"
          justify={"space-between"}
          direction={"row"}
          align={"center"}
          className="rounded-[10px]"
          bg="rgba(0,0,0,0.9)"
          px={20}
        >
          <Text
            fw={400}
            variant="gradient"
            gradient={{ from: "#FFFFFF", to: "#757A8C", deg: 90 }}
            size="xl"
          >
            VISION UI FREE
          </Text>
          <Flex
            direction={"row"}
            justify={"space-between"}
            align={"center"}
            h={"100%"}
            gap={{ md: "lg", lg: "xl" }}
          >
            <Link to="">
              <Group>
                <IconBox size={"20px"} fill="white" className="-mr-[12px]" />
                <Text c={"white"} fw={700} size="xs">
                  DASHBOARD
                </Text>
              </Group>
            </Link>
            <Link to="">
              <Group>
                <IconUser size={"20px"} fill="white" className="-mr-[12px]" />
                <Text c={"white"} fw={700} size="xs">
                  PROFILE
                </Text>
              </Group>
            </Link>

            <Link to="/sign-up">
              <Group>
                <IconUserCircle size={"20px"} fill="white" className="-mr-[12px]" />
                <Text c={"white"} fw={700} size="xs">
                  SIGN UP
                </Text>
              </Group>
            </Link>

            <Link to="/sign-in">
              <Group>
                <IconKeyFilled size={"17px"} fill="white" className="-mr-[12px]" />
                <Text c={"white"} fw={700} size="xs">
                  SIGN IN
                </Text>
              </Group>
            </Link>
          </Flex>
          <Button w={"15%"} variant="filled" color="#0075FF" radius="md">
            <Text size="10px" fw={700} c={"white"}>
              {"SIGN IN"}
            </Text>
          </Button>
        </Flex>
      </Group>
    </Flex>
  );
}
