import { Box, Divider, Text } from "@manon/react-components-layout";
import { vars } from "@manon/themes";

import { formatDate } from "@/src/utils/formatDate";
import { ViewKeydata } from "@/src/apis/worker/getViewList";
import { Button } from "@manon/react-components-button";
import { deleteViewDetail } from "@/src/apis/worker/deleteViewDetail";
import React from "react";
import { useRefresh } from "@/src/hooks/useRefresh";

type Props = {
  viewList: ViewKeydata[];
};

const ViewList = ({ viewList }: Props) => {
  const { refresh } = useRefresh();
  const sortedLastedDateViewList = [...viewList].sort((current, prev) => {
    const currentDate = new Date(current.metadata.createAt);
    const prevDate = new Date(prev.metadata.createAt);

    return prevDate.getTime() - currentDate.getTime();
  });

  const handleClickDelete = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    viewId: string,
  ) => {
    event.preventDefault();

    const confirm = window.confirm("정말 삭제하시겠습니까?");

    if (!confirm) return;

    await deleteViewDetail({ viewId });
    refresh();
  };

  return (
    <Box
      marginY={14}
      paddingX={8}
      paddingY={6}
      className="max-w-[600px] w-full"
      boxShadow="base"
      style={{
        background: vars.colors.$static.light.color.white,
      }}
    >
      <ul>
        {sortedLastedDateViewList.map(({ name, metadata }) => (
          <a href={`/view/${name}`} target="_blank" key={name} rel="noreferrer">
            <li className="p-2 flex  items-center hover:bg-gray-100">
              <div className="w-full">
                <Text
                  fontSize="sm"
                  style={{ fontWeight: vars.typography.fontWeight[600] }}
                >
                  {metadata.title ?? name}
                </Text>
                <Text
                  fontSize="xs"
                  style={{ color: vars.colors.$static.light.gray[500] }}
                >
                  {formatDate(metadata.createAt)}
                </Text>
              </div>
              <div className="min-w-fit">
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={(event) => handleClickDelete(event, name)}
                >
                  삭제
                </Button>
              </div>
            </li>
            <Divider />
          </a>
        ))}
      </ul>
    </Box>
  );
};

export default ViewList;
