import type { FC, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export const Section: FC<Props> = ({ title, children }) => {
  return (
    <section className="my-[15px] mx-0">
      <div className="py-0 px-[15px]">
        <h2 className="mb-[10px]">{title}</h2>
        {children}
      </div>
    </section>
  );
};
