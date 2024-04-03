import dynamic from "next/dynamic";
const ListTable = dynamic(() =>
  import("./../../../../components/common/ListTable")
);
const page = () => {
  const data = [
    {
      id: "1",
      name: "John Brown",
      email: "mdraselkibria11@gmail.com",
      phoneNumber: "01715972211",
      address: "Tangail",
    },
    {
      id: "2",
      name: "John Brown",
      email: "mdraselkibria11@gmail.com",
      phoneNumber: "01715972211",
      address: "Tangail",
    },
    {
      id: "3",
      name: "John Brown",
      email: "mdraselkibria11@gmail.com",
      phoneNumber: "01715972211",
      address: "Tangail",
    },
  ];
  return (
    <div>
      <ListTable data={data} />
    </div>
  );
};

export default page;
