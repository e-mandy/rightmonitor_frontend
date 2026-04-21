import { type FC } from "react";
import { type WithChildren } from "../../../../helpers";

const SectionActions: FC<WithChildren> = ({ children }) => {
  return (
    <div className="d-flex align-items-center gap-2 gap-lg-3">{children}</div>
  );
};

export { SectionActions };
