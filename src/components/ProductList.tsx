import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 3;

interface ProductListProps {
  categoryId: string;
  limit?: number;
  searchParams?: {
    name?: string;
    type?: string;
    min?: number;
    max?: number;
    page?: string;
    sort?: string;
    cat?: string;
  };
}

const allowedSortFields = [
  "name",
  "price",
  "sku",
  "slug",
  "_id",
  "productType",
  "priceData.price",
  "numericId",
  "lastUpdated",
] as const;
type SortField = (typeof allowedSortFields)[number];

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: ProductListProps) => {
  const wixClient = await wixClientServer();

  let res;

  const productQuery = wixClient.products.queryProducts();

  if (searchParams?.name) {
    productQuery.startsWith("name", searchParams.name);
  }

  if (categoryId) {
    productQuery.eq("collectionIds", categoryId);
  }

  if (searchParams?.type) {
    productQuery.hasSome("productType", [searchParams.type]);
  } else {
    productQuery.hasSome("productType", ["physical", "digital"]);
  }

  if (typeof searchParams?.min === "number") {
    productQuery.gt("priceData.price", searchParams.min);
  } else {
    productQuery.gt("priceData.price", 0);
  }

  if (typeof searchParams?.max === "number") {
    productQuery.lt("priceData.price", searchParams.max);
  } else {
    productQuery.lt("priceData.price", 999999);
  }

  productQuery.limit(limit || PRODUCT_PER_PAGE);

  if (searchParams?.page) {
    productQuery.skip(
      parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
    );
  } else {
    productQuery.skip(0);
  }

  if (searchParams?.sort && !searchParams.sort.includes("default")) {
    const [sortType, sortBy] = searchParams.sort.split(" ");
    if (allowedSortFields.includes(sortBy as SortField)) {
      if (sortType === "asc") {
        res = await productQuery.ascending(sortBy as SortField).find();
      } else if (sortType === "desc") {
        res = await productQuery.descending(sortBy as SortField).find();
      }
    } else {
      throw new Error(`Invalid sort field: ${sortBy}`);
    }
  } else {
    res = await productQuery.find();
  }

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res?.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media?.items && product.media.items.length > 1 && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">₺{product.price?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )}
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
      {(searchParams?.cat || searchParams?.name) && (
        <Pagination
          currentPage={res?.currentPage || 0}
          hasPrev={res?.hasPrev() || false}
          hasNext={res?.hasNext() || false}
        />
      )}
    </div>
  );
};

export default ProductList;
