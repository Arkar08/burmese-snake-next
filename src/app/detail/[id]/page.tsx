/* eslint-disable react/no-unescaped-entities */
import { Params } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";
import { snakes } from "@/data";

export default function Detail({ params }: Params) {
  const filterProduct = snakes.filter((s) => {
    return s.Id === parseInt(params.id);
  });

  if (filterProduct.length === 0) {
    return <div>No Detail found</div>;
  }

  const product = filterProduct[0];
  return (
    <div>
      <div className="flex items-center justify-start lg:mx-12 mt-4 mx-6">
        <Link href="/">
          {" "}
          <p className="px-4 py-1 bg-black text-white cursor-pointer hover:bg-blue-500 hover:text-black rounded-md">
            Back
          </p>
        </Link>
      </div>

      <div className="flex items-center justify-center mt-4 px-8 md:flex-col lg:flex-row sm:flex-col flex-col">
        <Image
          src={product.Img}
          alt="detail-photo"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
          className="mx-12"
        />
        <p className="lg:text-sm mt-4 text-xl">{product.Detail}</p>
      </div>
    </div>
  );
}
