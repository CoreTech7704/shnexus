import { ArrowRight, Box } from "lucide-react";

interface Product {
  name: string;
  price: string;
  tag?: string;
}

const products: Product[] = [
  {
    name: "Studio Chair",
    price: "$249",
    tag: "New",
  },
  {
    name: "Desk Lamp",
    price: "$89",
  },
  {
    name: "Side Table",
    price: "$179",
    tag: "Sale",
  },
] as const;

export function EcommercePreview() {
  return (
    <div className="bg-[#0A0E14] p-3">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <p className="font-heading text-[10px] font-bold text-white">BLOOM</p>
          <p className="text-[8px] text-white/30">Modern living essentials</p>
        </div>

        <span className="rounded-md bg-[#6D5EF5]/15 px-2 py-1 text-[8px] text-[#8B7FF8]">
          Shop
        </span>
      </div>

      <div className="mb-2 grid grid-cols-3 gap-1.5">
        {products.map((product) => (
          <div
            key={product.name}
            className="overflow-hidden rounded-lg border border-white/5 bg-[#111827]"
          >
            <div className="flex h-12 items-center justify-center bg-white/3">
              <Box size={14} className="text-white/20" />
            </div>

            <div className="p-1.5">
              <div className="text-[8px] font-medium text-white/70">
                {product.name}
              </div>

              <div className="mt-0.5 flex items-center justify-between">
                <span className="font-mono text-[8px] text-white/40">
                  {product.price}
                </span>

                {product.tag && (
                  <span className="rounded bg-[#6D5EF5]/20 px-1 text-[7px] text-[#8B7FF8]">
                    {product.tag}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-lg border border-[#6D5EF5]/20 bg-[#6D5EF5]/8 p-2">
        <span className="text-[8px] text-white/50">
          Free shipping on orders over $100
        </span>

        <ArrowRight size={9} className="text-violet-400" />
      </div>
    </div>
  );
}
