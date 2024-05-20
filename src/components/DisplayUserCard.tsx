import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import UserCard from "./UserCard";
import axios from "axios";
import { UserType } from "@/utils/types/UserType";
import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";

const DisplayUserCard = () => {
  const [currentPage, setCurrentPage] = useState<number>();
  const [currentSeed, setCurrentSeed] = useState<string>();

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["user", currentPage],
    queryFn: async () => {
      const res = await axios.get("https://randomuser.me/api/", {
        params: {
          page: currentPage,
          results: 12,
          seed: currentSeed,
        },
      });

      const data = res.data as UserType;

      setCurrentSeed(data.info.seed);

      return data;
    },
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  //   console.log(data);
  console.log(currentPage);

  useEffect(() => {
    queryClient.refetchQueries({ queryKey: ["user"] });
  }, [currentPage, data]);

  return (
    <>
      <div className="space-y-6 mx-auto">
        <div className="w-full grid md:grid-cols-3 grid-cols-2 lg:gap-4">
          {data?.results?.map((item) => {
            return <UserCard key={item.login.uuid} prop={item} />;
          })}
        </div>
        <div className="flex justify-center items-center w-full">
          <Pagination
            isCompact
            showControls
            total={10}
            page={currentPage}
            onChange={setCurrentPage}
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default DisplayUserCard;
