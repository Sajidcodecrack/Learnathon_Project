import Hero from "./components/Hero";
import Nav from "../../components/Nav/Nav";
import Bento from "./components/Bento";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import {
  Card,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const products = [
  {
    id: 1,
    name: "Organic Apples",
    description: "Freshly picked organic apples from local farms.",
    image: "./Bento1.jpg",
  },
  {
    id: 2,
    name: "Farm Fresh Milk",
    description: "Pure and fresh milk directly from dairy farms.",
    image: "./Bento1.jpg",
  },
  {
    id: 3,
    name: "Natural Honey",
    description: "Raw and unfiltered honey from trusted beekeepers.",
    image: "./Bento1.jpg",
  },
  {
    id: 4,
    name: "Organic Vegetables",
    description: "Healthy and chemical-free vegetables.",
    image: "./Bento1.jpg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Bento />

      {/* Product Suggestions Section */}
      <section className="py-16 px-6 lg:px-32">
        <motion.h2
          {...fadeIn}
          className="text-3xl font-bold text-center mb-8 text-foreground"
        >
          Recommended Products
        </motion.h2>
        <motion.div
          {...fadeIn}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <Card key={product.id} className="p-6 hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-foreground">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                {product.description}
              </p>
              <Button className="mt-4 w-full bg-primary hover:bg-primary/90">
                Buy Now
              </Button>
            </Card>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 lg:px-32 bg-muted">
        <motion.h2
          {...fadeIn}
          className="text-3xl font-bold text-center mb-8 text-foreground"
        >
          Why Choose Us?
        </motion.h2>
        <motion.div
          {...fadeIn}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {["Fast Delivery", "Best Prices", "100% Organic"].map(
            (feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardTitle className="text-2xl font-bold text-foreground mb-4">
                  {feature}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  We ensure top-notch service.
                </CardDescription>
              </Card>
            )
          )}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="my-16 mx-6 lg:mx-32  border-2 rounded-md">
        <motion.h2
          {...fadeIn}
          className="text-3xl font-bold text-center pt-10 text-foreground "
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div {...fadeIn} className="max-w-3xl mx-auto py-20">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                What is FairBasket?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                FairBasket is a marketplace connecting farmers and retailers
                directly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                How does pricing work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We ensure transparent and competitive pricing by eliminating
                middlemen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;