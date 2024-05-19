import DisplayUserCard from "@/components/DisplayUserCard";
import Layout from "@/components/Layout";

const index = () => {
  return (
    <>
      <Layout>
        <div className="lg:w-[60%] md:w-[90%] w-full md:p-7 mx-auto">
          <DisplayUserCard />
        </div>
      </Layout>
    </>
  );
};

export default index;
