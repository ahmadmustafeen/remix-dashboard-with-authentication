import { Box, Button, Flex, Grid, Text, BackgroundImage, Group } from "@mantine/core";
import { Form, Link } from "@remix-run/react";
import Input from "~/components/input";

export default function SignUp() {
  return (
    <Box
      w={{
        base: "100%",
      }}
      mx="auto"
      mih={{
        base: "100vh",
      }}
    >
      <Grid
        w={{
          base: "99%",
        }}
        h={"100%"}
      >
        
        <Grid.Col
          span={{ base: 12, sm: 6 }}
          className="flex justify-center items-center h-[600px]"
        >
          <BackgroundImage h={"100%"} miw={"100%"} src="svg/AUTH-PIC.webp">
            <Text c={"white"}>INSPIRED BY THE FUTURE:</Text>
            <Text c={"white"}>INSPIRED BY THE FUTURE:</Text>
          </BackgroundImage>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, sm: 6 }}
          className="flex justify-start items-center bg-gradient-to-br from-[#0F123B] via-[#090D2E] to-[#020515]"
        >
          <Flex
            my={{ base: "sm", sm: "lg" }}
            align={"start"}
            direction={"column"}
            gap={"10px"}
            justify={{ base: "flex-start", sm: "space-start" }}
            ml={70}
          >
            <Text c={"white"} fw={700} size="30px">
              Nice to see you!
            </Text>
            <Text c={"#A0AEC0"} fw={400} size="14px">
              Enter your email and password to sign in
            </Text>
            <Form
              method="post"
              className="flex flex-col justify-center items-start mt-8 gap-5"
            >
              <Input label="Email" placeholder="Your email address" />
              <Input label="Password" placeholder="Your password" />

              <Button
                w={"100%"}
                type="submit"
                variant="filled"
                color="#0075FF"
                radius="md"
              >
                <Text size="10px" fw={700} c={"white"}>
                  {"SIGN IN"}
                </Text>
              </Button>
            </Form>
            <Text c={"#64748b"} fw={400} size="14px">
              Don't have an account?{" "}
              <Link to="/sign-up" className="font-bold text-white">
                Sign up
              </Link>
            </Text>
          </Flex>
        </Grid.Col>
      </Grid>
      
    </Box>
  );
}
