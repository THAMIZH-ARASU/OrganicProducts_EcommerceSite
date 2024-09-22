import { useState } from "react";
import { Rating, Button, Grid, Box, LinearProgress } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://organicindia.com/cdn/shop/products/Sweet-Rose-Front_200x220_crop_center.jpg?v=1667829175",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://organicindia.com/cdn/shop/files/TulsiSweetRose_200x220_crop_center.jpg?v=1704974124",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://organicindia.com/cdn/shop/products/sweet-rose-back-copy_200x220_crop_center.jpg?v=1704974124",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://organicindia.com/cdn/shop/products/Sweet-Rose---ING-CC_200x220_crop_center.jpg?v=1704974124",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white">
      <div className="pt-7">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-10 flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Details */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] lg:w-[30rem] lg:h-[35rem]">
              <img
                alt={product.images[0].alt}
                src={product.images[0].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    alt={item.alt}
                    src={item.src}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-bold text-gray-900">
                Tulsi Sweet Rose
              </h1>
              <h1 className="text-medium lg:text-medium text-gray-900 opacity-60 pt-1">
                Brand: Organic India
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold ">₹699</p>
                <p className="opacity-50 line-through">₹2,899</p>
                <p className="text-red-600 font-semibold ">75% Off</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={3.5} readOnly precision={0.5}/>
                  <p className="opacity-50 text-sm">56540 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    3872 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                <Button variant="contained" sx={{ px: "2rem", py: "1rem", background:"linear-gradient(76deg, rgba(2,0,36,1) 0%, rgba(79,124,26,1) 0%, rgba(3,245,35,0.814385150812065) 100%)"}}>
                  Add to Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Ratings and Reviews*/}
        <section>
            <h1 className="font-semibold text-lg pb-4">Recent Reviews and Ratings</h1>

            <div className="border p-5">
                <Grid container spacing={7}>
                    <Grid item xs={7}>
                        <div className="space-y-5">
                            {[1, 1, 1].map((item) => <ProductReviewCard/>)}
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <h1 className="text-xl font-semibold pb-1">
                            Product Ratings
                        </h1>

                        <div className="flex items-center space-x-3">
                            <Rating value={4.6} precision={0.5} readOnly />
                            <p className='opacity-60'>3425 Ratings</p>
                        </div>

                        <Box className="mt-5 space-y-4">
                            <Grid container alignContent="center" gap={2}>
                                
                                <Grid item xs={2}>
                                    <p>Excellent</p>
                                </Grid>

                                <Grid item xs={7}>
                                    <LinearProgress className="mt-2" sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} variant="determinate" value={40} color="success"/>
                                </Grid>

                            </Grid>

                            <Grid container alignContent="center" gap={2}>
                                
                                <Grid item xs={2}>
                                    <p>Very Good</p>
                                </Grid>

                                <Grid item xs={7}>
                                    <LinearProgress className="mt-2" sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} variant="determinate" value={60} color="success"/>
                                </Grid>

                            </Grid>

                            <Grid container alignContent="center" gap={2}>
                                
                                <Grid item xs={2}>
                                    <p>Good</p>
                                </Grid>

                                <Grid item xs={7}>
                                    <LinearProgress className="mt-2" sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} variant="determinate" value={37} color="success"/>
                                </Grid>

                            </Grid>

                            <Grid container alignContent="center" gap={2}>
                                
                                <Grid item xs={2}>
                                    <p>Average</p>
                                </Grid>

                                <Grid item xs={7}>
                                    <LinearProgress className="mt-2" sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} variant="determinate" value={52} color="success"/>
                                </Grid>

                            </Grid>

                            <Grid container alignContent="center" gap={2}>
                                
                                <Grid item xs={2}>
                                    <p>Poor</p>
                                </Grid>

                                <Grid item xs={7}>
                                    <LinearProgress className="mt-2" sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} variant="determinate" value={20} color="success"/>
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </section>
      </div>
    </div>
  );
}
