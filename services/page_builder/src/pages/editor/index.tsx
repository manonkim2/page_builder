import Link from "next/link";
import { Button } from "@manon/react-components-button";
import DesktopFirstLayout from "@/src/components/view/DesktopFirstLayout";
import DesktopFirstNav from "@/src/components/view/DesktopFirstLayout/Nav";

interface IEditorPageProps {}

const EditorPage = ({}: IEditorPageProps) => {
  return (
    <DesktopFirstLayout>
      <DesktopFirstNav>
        <Link href="./editor/new">
          <Button>페이지 만들기</Button>
        </Link>
      </DesktopFirstNav>
    </DesktopFirstLayout>
  );
};

export default EditorPage;
