import BlockContent from "@sanity/block-content-to-react";
import cl from "classnames";
import { clientConfig } from "../../lib/client";

const Content = ({ body }) => {
  return (
    <div className={cl}>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 400, h: 750, fit: "max" }}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  );
};

export default Content;
