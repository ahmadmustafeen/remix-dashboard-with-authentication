import { Box, Button, Flex, Grid, Text } from "@mantine/core";
import { Form, Link } from "@remix-run/react";
import { IconBrandFacebook, IconBrandGoogleFilled, IconBrandAppleFilled } from "@tabler/icons-react";
import AUTHFOOTER from "~/components/authfooter";
import AUTHLEFTGRID from "~/components/authleftgrid";
import AUTHNAV from "~/components/authnav";
import INPUT from "~/components/input";

export default function SignUp() {
  return (
    <Box
      w={{
        base: "100%",
      }}
      mx="auto"
      h={"100vh"}
    >
      <Grid
        w={"99%"}
        h={"100%"}
      >
        <AUTHNAV />
        
        <Grid.Col
          span={{ base: 12, sm: 6 }}
          className="flex justify-center items-center min-h-[50vh] md:min-h-[100vh] !p-0"
        >
          <AUTHLEFTGRID/>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, sm: 6 }}
          className="flex justify-start items-center bg-gradient-to-br from-[#0F123B] via-[#090D2E] to-[#020515]"
        >
          <Flex
            my={{ base: "sm", sm: "lg" }}
            align={{ base: "center", sm: "start" }}
            direction={"column"}
            gap={"10px"}
            justify={{ base: "flex-start", sm: "space-start" }}
            ml={{ base: 0, sm: 20, md: 50 }}
            mt={{ base: "50", md: "100" }}
            w={"100%"}
          >
            <Flex 
              direction={"column"}
              align={"center"}
              w={{ base: "250", sm: 270, lg: "350" }}
              ml={20}
            >
              <Text ta={"center"} c={"white"} fw={700} size="30px">
              Welcome!
            </Text>
            <Text ta={"center"} mt={10} c={"white"} fw={400} size="14px">
              Use these awesome forms to login or create new account in your project for free.
            </Text>
            </Flex>
            
            <Form
              method="post"
              className="flex flex-col justify-center items-start  gap-5 mt-8
              border-2 border-indigo-600 rounded-2xl px-5 py-8
              bg-gradient-to-r from-rgba-white via-rgba-white to-transparent"
            >
              <Flex
                direction={"column"}
                w={"100%"}
                align={"center"}
                gap={20}
              >
                <Text>Register With</Text>
                <Flex
                  direction={"row"}
                  w={"100%"}
                  justify={"center"}
                  gap={20}

                >
                  <Flex
                  p={16}
                  className="border-2 border-indigo-600 rounded-2xl"
                >
                  <IconBrandFacebook color="white" />
                </Flex>
                <Flex
                  p={16}
                  className="border-2 border-indigo-600 rounded-2xl"
                >
                  <IconBrandAppleFilled color="white" />
                </Flex>
                <Flex
                  p={16}
                  className="border-2 border-indigo-600 rounded-2xl"
                >
                  <IconBrandGoogleFilled color="white" />
                </Flex>
                </Flex>
                
              </Flex>
              <INPUT label="Name" placeholder="Your full name" />
              <INPUT label="Email" placeholder="Your email address" />
              <INPUT label="Password" placeholder="Your password" typePassword />

              <Button
                w={"100%"}
                type="submit"
                variant="filled"
                color="#0075FF"
                radius="md"
              >
                <Text size="10px" fw={700} c={"white"} >
                  {"SIGN IN"}
                </Text>
              </Button>
              <Flex
              mt={10}
              justify={"center"}
              align={"center"}
              w={{ base: "250", sm: 270, lg: "350" }}
            >
              <Text c={"#64748b"} fw={400} size="14px">
                Already have an account?{" "}
                <Link to="/sign-in" className="font-bold text-white">
                Sign in
                </Link>
              </Text>
            </Flex>
            </Form>
            <AUTHFOOTER/>
          </Flex>
        </Grid.Col>
      </Grid>
      
    </Box>
  );
}
