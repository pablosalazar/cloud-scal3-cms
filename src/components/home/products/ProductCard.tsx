import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Product } from "./types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="card h-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div
            className={`size-[40px] md:size-[60px] p-1 rounded-4xl flex items-center justify-center bg-surface-2`}
          >
            <Image
              src={product.imagePath}
              alt={product.title}
              width={40}
              height={40}
            />
          </div>
          <h3 className="font-semibold  md:text-lg text-white ">
            {product.title}
          </h3>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="mb-6">
          <h4 className="font-bold text-2xl md:text-3xl text-white mb-3 leading-tight">
            {product.subtitle}
          </h4>
          <p className="font-medium md:text-lg text-white/60 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mb-3">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src="/checkmark-with-circle.png"
                alt="Check icon"
                width={25}
                height={25}
              />
              <span className="">{feature.text}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Link
          href={product.href}
          className="btn btn--primary py-2 px-5 hover-primary-raise"
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
}
