import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Avatar,
  Button,
} from "@nextui-org/react";

export default function UserCard() {
  return (
    <Card
      className="max-w-[400px] border border-slate-50/20"
      radius="none"
      shadow="none"
    >
      <CardHeader className="flex flex-col gap-3 justify-center">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          className="w-20 h-20 text-large"
        />
        <div className="text-center">
          <p className="text-xl font-bold">ABC XYZ</p>
          <p className="text-base font-bold">abc@gmail.com</p>
        </div>
      </CardHeader>
      <CardBody className="text-justify space-y-3">
        <p className="text-sm lg:text-base line-clamp-3 lg:line-clamp-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam
          laudantium nostrum, pariatur rem distinctio!
        </p>
      </CardBody>
      <CardFooter>
        <Button color="primary">Details</Button>
      </CardFooter>
    </Card>
  );
}
