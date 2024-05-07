import type { MetaFunction } from "@remix-run/node";
import { Box, Text } from "@mantine/core";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Box className={"min-h-full w-full flex items-center bg-slate-500"}>
      <div className="w-3/4 h-40 mx-auto my-auto bg-white rounded-lg justify-center items-center flex">
        <Text>You dont have permission to view this page</Text>
      </div>
    </Box>
  );
}
