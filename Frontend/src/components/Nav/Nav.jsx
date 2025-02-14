"use client";
import logo from "./assets/Fairbasket.png";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../pages/auth/Firebase";
import { Sun, Moon, ShoppingCart, Menu, Search, Camera } from "lucide-react"; // Added Camera icon
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Nav = () => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="fixed top-0 w-full text-foreground py-4 px-4 md:px-8 lg:px-32 flex items-center justify-between z-50 border-b-2 bg-background/80 backdrop-blur-lg">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="FairBasket" className="h-8" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6">
        {/* Products Dropdown */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Featured Products</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Check out our latest and most popular items
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/categories/electronics">Electronics</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/categories/clothing">Clothing</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/categories/home">Home & Garden</a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-64 bg-muted"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Camera Button */}
        <Button variant="ghost" size="icon" aria-label="Camera">
          <Camera className="h-5 w-5" />
        </Button>

        {/* Cart Button */}
        <Button variant="outline" className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          <span>Cart</span>
        </Button>

        {/* Auth Buttons */}
        {user ? (
          <Button onClick={handleLogout} variant="destructive">
            Logout
          </Button>
        ) : (
          <Button onClick={() => navigate("/login")} variant="default">
            Sign In
          </Button>
        )}

        {/* Theme Toggle */}
        <Toggle onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Toggle>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center space-x-4">
        {/* Camera Button */}
        <Button variant="ghost" size="icon" aria-label="Camera">
          <Camera className="h-5 w-5" />
        </Button>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full">
              <div className="flex-1 py-4">
                <div className="mb-4">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full"
                  />
                </div>
                <nav className="space-y-4">
                  <Link to="/products" className="block py-2 hover:underline">
                    Products
                  </Link>
                  <Link to="/about" className="block py-2 hover:underline">
                    About
                  </Link>
                  <Link to="/contact" className="block py-2 hover:underline">
                    Contact
                  </Link>
                </nav>
              </div>
              <div className="border-t pt-4">
                <Button variant="outline" className="w-full mb-2">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart
                </Button>
                {user ? (
                  <Button onClick={handleLogout} variant="destructive" className="w-full">
                    Logout
                  </Button>
                ) : (
                  <Button onClick={() => navigate("/login")} variant="default" className="w-full">
                    Sign In
                  </Button>
                )}
                <div className="mt-4 flex justify-between items-center">
                  <span>Theme</span>
                  <Toggle onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  </Toggle>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Nav;