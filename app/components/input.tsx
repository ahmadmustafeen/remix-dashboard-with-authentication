import { Box, Text } from "@mantine/core";

interface InputProp{
    label: string,
    placeholder: string
    typePassword?: boolean
}

export default function INPUT({label, placeholder, typePassword}:InputProp) {
  return (
    <Box>
      <Text size="14px" fw={400} c={"white"}>
        {label}
      </Text>
      <Box className="border-2 rounded-3xl border-indigo-600 mt-2 flex item-center h-10 sm:h-11 md:h-12 w-[250px] sm:w-[270px] lg:w-[350px]">
        <input
          type={typePassword ? "password" :"text"}
          placeholder={placeholder}
          className="bg-transparent ml-[5%] w-[90%] outline-none text-white"
        />
      </Box>
    </Box>
  );
}
