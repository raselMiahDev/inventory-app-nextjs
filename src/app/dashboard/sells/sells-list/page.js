import dynamic from "next/dynamic";
const UnderConstraction = dynamic(() =>
  import("@/components/common/UnderConstraction")
);
const page = () => {
  return (
    <div>
      <UnderConstraction />
    </div>
  );
};

export default page;
