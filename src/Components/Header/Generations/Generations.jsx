import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

export default function Generations() {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <Gen1 />
      <Gen2 />
      <Gen3 />
      <Gen4 />
    </div>
  );
}