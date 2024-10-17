interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  brand: string;
  rating: number;
  availabilityStatus: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  stock: number;
  minimumOrderQuantity: number;
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;
  weight: number;
  sku: string;
  tags: string[];
  thumbnail: string;
  images: string[];
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  reviews: Review[]; // Assuming `Review` is a separate interface
}

// Define the type for reviews if needed
interface Review {
  // Add relevant fields for the reviews
  reviewerName: string;
  rating: number;
  comment: string;
}