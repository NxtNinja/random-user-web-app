import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { User } from "@/utils/types/UserType";

type UserProp = {
  prop: User;
};

export default function UserCard({ prop }: UserProp) {
  return (
    <Card
      className="max-w-[400px] border border-slate-50/20"
      radius="none"
      shadow="none"
    >
      <CardHeader className="flex flex-col gap-3 justify-center p-4">
        <Avatar src={prop.picture.large} className="w-20 h-20 text-large" />
      </CardHeader>
      <CardBody className="text-justify space-y-3">
        <div className="text-center">
          <p className="md:text-xl text-base font-bold">
            {prop.name.title} {prop.name.first} {prop.name.last}
          </p>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
            porro?
          </p>
        </div>
      </CardBody>
      <CardFooter>
        <Button size="lg" radius="sm" color="primary" className="w-full">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
