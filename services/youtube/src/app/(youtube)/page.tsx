import VideoPopularList from "@/src/features/main/components/VideoPopularList";
import * as s from "./page.css";

export default function Home() {
  return (
    <main className={s.main}>
      <h1>타이틀</h1>
      <VideoPopularList />
    </main>
  );
}
