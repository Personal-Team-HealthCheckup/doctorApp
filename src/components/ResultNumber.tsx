import React from "react";
interface NumberData {
    id: number;
    count: number;
    symbol: string;
    title: string;
}
const Card = ({ count, symbol, title }: NumberData) => {
    return <div className="grid justify-center items-center justify-items-center">
        <h3 className="text-primary font-DM_Sans font-bold text-[2.75rem] ">
            {count}<span className="text-primary-grey font-DM_Sans font-bold">{symbol}</span>
        </h3>
<p className="text-2xl font-DM_Sans text-black-300 font-bold">{title}</p>
    </div>
}
const numberData: NumberData[] = [
    {
        id: 1,
        count: 99,
        symbol: "%",
        title: 'Customer satisfaction'
    },
    {
        id: 2,
        count: 15,
        symbol: "k",
        title: 'Online Patients'
    },
    {
        id: 3,
        count: 12,
        symbol: "k",
        title: 'Patients Recovered'
    },
    {
        id: 4,
        count: 240,
        symbol: "%",
        title: 'Company growth'
    },
]
function ResultNumber() {
    return (
        <section className="w-full py-5 my-5 px-4">
            <div className=" container mx-auto  flex flex-col justify-center items-center">
                <div className="center">
                    <h2 className=" text-primary font-DM_Sans text-4xl">
                        Our results in numbers
                    </h2>
                </div>
                <div className="flex justify-between items-center flex-wrap w-full mt-8">
                    {numberData.map(data => (
                        <div  className="mt-5" key={data.id}> 
                            <Card {...data}  />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ResultNumber;
