import UserCard from "./UserCard";

const DisplayUserCard = () => {
  return (
    <>
      <div className="w-full grid md:grid-cols-3 grid-cols-2 lg:gap-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
};

export default DisplayUserCard;
