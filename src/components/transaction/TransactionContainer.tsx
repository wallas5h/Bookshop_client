import { Header_1 } from "../header_1/Header_1";
import { TransactionResume } from "./TransactionResume";

export const TransactionContainer = () => {
  return (
    <>
      <Header_1 />
      <section>
        <TransactionResume />
      </section>
    </>
  );
};
