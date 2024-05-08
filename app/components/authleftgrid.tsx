import { Flex, Text, BackgroundImage } from "@mantine/core";

export default function AUTHLEFTGRID() {
  return (
    <BackgroundImage
      h={"100%"}
      w={"100%"}
      className="border-none"
      src="svg/AUTH-PIC.webp"
    >
      <Flex
        w={"100%"}
        h={"100%"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        bg="rgba(0,0,0,0.5)"
      >
        <Text fw={400} size="20px" c={"#FFFFFF"}>
          INSPIRED BY THE FUTURE:
        </Text>
        <Text
          mt={10}
          fw={700}
          variant="gradient"
          gradient={{ from: "#FFFFFF", to: "#21242F", deg: 90 }}
          className="!text-xl sm:!text-4xl  md:!text-2xl lg:!text-4xl"
        >
          THE VISION UI DASHBOARD
        </Text>
      </Flex>
    </BackgroundImage>
  );
}
