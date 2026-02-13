"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function BackButton() {
  const router = useRouter();

  return (

      <Button onClick={() => router.back()} className={"btn mx-10 cursor-pointer mb-5"}>
        <IoIosArrowBack className="" />
      </Button>

  );
}
