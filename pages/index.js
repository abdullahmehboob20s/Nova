import Button from "@/components/UI/Button";
import Navbar from "@/components/UI/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen z-10 flex items-end pb-16">
      <Navbar />

      <img
        src="images/fox-transparent-bg.png"
        className="absolute top-0 left-0 w-full h-full object-scale-down z-10 pointer-events-none"
        alt=""
      />

      <div className="z-50 relative w-full">
        <div className="container">
          <div className="mb-8">
            <h1 className="font-myriad font-bold text-center text-fawn text-sm mb-3">
              Leass a d Lssng B esal
            </h1>
            <h1 className="font-myriad font-bold text-center text-fawn text-4xl mb-4">
              Leass a d Lssng B esal
            </h1>

            <p className="text-center text-fawn max-w-[30rem] text-sm mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur itaque perspiciatis voluptatum molestias enim fuga,
              tempora eaque, rem ab nesciunt possimus fugit autem voluptas
              veritatis, ipsum id incidunt natus quia.
            </p>
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="max-w-[160px] w-full">
              Trade
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
