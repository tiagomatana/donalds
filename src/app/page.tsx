import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col align-middle items-center h-full justify-center">
      <Link href={'/fsw-donalds'}><Button variant="secondary">Toque aqui para iniciar</Button></Link>

    </div>
  );
};

export default HomePage;
