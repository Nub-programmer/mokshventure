import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const menuItems = [
  {
    name: "Butter Chicken",
    description: "Tender chicken in rich, creamy tomato gravy with aromatic spices",
    price: "₹350",
    image: "/images/dish-1.jpg",
    tag: "Bestseller",
  },
  {
    name: "Paneer Tikka",
    description: "Grilled cottage cheese marinated in yogurt and spices",
    price: "₹280",
    image: "/images/dish-2.jpg",
    tag: "Vegetarian",
  },
  {
    name: "Hyderabadi Biryani",
    description: "Fragrant basmati rice layered with aromatic spices and saffron",
    price: "₹320",
    image: "/images/dish-3.jpg",
    tag: "Chef's Special",
  },
  {
    name: "Dal Makhani",
    description: "Slow-cooked black lentils in creamy butter sauce",
    price: "₹220",
    image: "/images/dish-4.jpg",
    tag: "Vegetarian",
  },
  {
    name: "Tandoori Chicken",
    description: "Classic clay oven roasted chicken with traditional marinade",
    price: "₹380",
    image: "/images/dish-5.jpg",
    tag: "Popular",
  },
  {
    name: "Gulab Jamun",
    description: "Golden milk dumplings soaked in rose-flavored sugar syrup",
    price: "₹120",
    image: "/images/dish-6.jpg",
    tag: "Dessert",
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase mb-3">
            Our Specialties
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Signature Dishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Crafted with love, served with pride. Each dish tells a story of tradition and taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-card-foreground">{item.name}</h3>
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
