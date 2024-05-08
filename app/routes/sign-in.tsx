import { Box, Button, Flex, Grid, Text } from "@mantine/core";

import { Form, Link } from "@remix-run/react";
import AUTHFOOTER from "~/components/authfooter";
import AUTHLEFTGRID from "~/components/authleftgrid";
import AUTHNAV from "~/components/authnav";
import INPUT from "~/components/input";

export default function SignIn() {
  return (
    <Box
      w={{
        base: "100%",
      }}
      mx="auto"
      h={"100vh"}
    >
      <Grid w={"99%"} h={"100%"}>
        <AUTHNAV />
        <Grid.Col
          span={{ base: 12, sm: 6 }}
          className="flex justify-center items-center h-[50vh] md:h-[100vh] !p-0"
        >
          <AUTHLEFTGRID />
          
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, sm: 6 }}
          className="flex justify-start items-center bg-gradient-to-br from-[#0F123B] via-[#090D2E] to-[#020515] !p-0"
        >
          <Flex
            mt={{ base: "50", md: "70" }}
            mb={{ base: "20", md: "0" }}
            align={{ base: "center", sm: "start" }}
            direction={"column"}
            gap={"10px"}
            justify={{ base: "flex-start", sm: "flex-end" }}
            ml={{ base: 0, sm: 50, md: 70 }}
            w={"100%"}
          >
            <Text c={"white"} fw={700} size="30px">
              Nice to see you!
            </Text>
            <Text c={"#A0AEC0"} fw={400} size="14px">
              Enter your email and password to sign in
            </Text>
            <Form
              method="post"
              className="flex flex-col justify-center items-center sm:items-start mt-8 gap-5"
            >
              <INPUT label="Email" placeholder="Your email address" />
              <INPUT label="Password" placeholder="Your password" />

              <Button
                w={"100%"}
                type="submit"
                variant="filled"
                color="#0075FF"
                radius="md"
                mt={10}
              >
                <Text size="10px" fw={700} c={"white"}>
                  {"SIGN IN"}
                </Text>
              </Button>
            </Form>
            <Flex
              mt={10}
              justify={"center"}
              align={"center"}
              w={{ base: "250", sm: 270, lg: "350" }}
            >
              <Text c={"#64748b"} fw={400} size="14px">
                Don{"'"}t have an account?{" "}
                <Link to="/sign-up" className="font-bold text-white">
                  Sign up
                </Link>
              </Text>
            </Flex>
            <AUTHFOOTER />
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
