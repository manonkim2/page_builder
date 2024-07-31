import Link from "next/link";
import { Button } from "@manon/react-components-button";
import DesktopFirstLayout from "@/src/components/Common/Layout/DesktopFirstLayout";
import DesktopFirstNav from "@/src/components/Common/Layout/DesktopFirstLayout/Nav";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import DesktopFirstBody from "@/src/components/Common/Layout/DesktopFirstLayout/Body";
import ViewList from "@/src/components/Features/EditorPage/ViewList";
import {
  getViewList,
  ViewListResponseData,
} from "@/src/apis/worker/getViewList";

const EditorPage = ({
  keys,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <DesktopFirstLayout>
      <DesktopFirstNav>
        <Link href="./editor/new">
          <Button>페이지 만들기</Button>
        </Link>
      </DesktopFirstNav>
      <DesktopFirstBody>
        <ViewList viewList={keys} />
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
};

export default EditorPage;

export const getServerSideProps: GetServerSideProps<
  ViewListResponseData
> = async () => {
  const response = await getViewList();

  return { props: response };
};
