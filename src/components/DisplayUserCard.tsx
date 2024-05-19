import { useQuery } from "@tanstack/react-query";
import UserCard from "./UserCard";
import axios from "axios";
import { UserType } from "@/utils/types/UserType";

const DisplayUserCard = () => {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get("https://randomuser.me/api/", {
        params: {
          results: 12,
        },
      });

      const data = res.data as UserType;

      return data.results;
    },
    refetchOnWindowFocus: false,
  });

  console.log(data);

  return (
    <>
      <div className="w-full grid md:grid-cols-3 grid-cols-2 lg:gap-4">
        {data?.map((item) => {
          return <UserCard key={item.login.uuid} prop={item} />;
        })}
      </div>
    </>
  );
};

export default DisplayUserCard;
