import SnakeList from "../components/SnakeList";
import { snakes } from "@/data";

export default function Home() {
  return (
    <div>
      <SnakeList snakes={snakes} />
    </div>
  );
}
