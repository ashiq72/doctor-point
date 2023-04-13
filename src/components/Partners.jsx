import { airbnb, binance, coinbase, dropbox } from "../assets";
export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
const Partners = () => (
  <section className="my-24">
    <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2   content-center justify-items-center">
      {clients.map((client) => (
        <div key={client.id} className="  sm:min-w-[192px] min-w-[120px] ">
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Partners;
