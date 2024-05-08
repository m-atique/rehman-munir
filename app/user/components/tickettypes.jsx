import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    name: "UAE Group",
    label: "United Arab Emirates",
    img: "https://fsdameeremillattourism.com/admin_assets/images/united-arab-emirates.jpg",
  },

  ,
  {
    name: "KSA Group",
    label: "Saudi Arabia",
    img: "https://fsdameeremillattourism.com/admin_assets/images/saudi_arabia.jpg",
  },
  {
    name: "Umrah Group",
    label: "UMRAH (Makkah & Madina)",
    img: "https://fsdameeremillattourism.com/images/new_booking/umrah.jpeg",
  },
  {
    name: "All Group",
    label: "All Available Groups",
    img: "https://fsdameeremillattourism.com/admin_assets/images/air-plan.jpg",
  },
];
const TicketTypes = () => {
  return (
    <div className="w-full flex-wrap flex items-start justify-center gap-5 h-screen overflow-visible">
      {data &&
        data.map((item,index) => (
          <div key={index} className="w-2/5  shadow shadow-slate-400 rounded-md bg-white h-3/6 p-4 flex flex-col items-center justify-center">
            <div className={`h-[79%] w-full rounded-md `}>
              <Image
                src={item.img}
                objectFit="cover"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full top-0 left-0 object-cover rounded-sm"
              />
            </div>
            <div className=" w-full text-center p-3"> {item.label}</div>
            <div className=" w-full rounded-b-lg flex flex-col items-center justify-center">
              <Link
               
                href={{
                    pathname: "/user/groups",
                    query: {
                      group: item.name.split(" ")[0]
                    },
                  }}
                className="bg-blue-400 text-white rounded-md  shadow-slate-500 w-3/5 p-2 text-center"
              >
                {item.name}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TicketTypes;
