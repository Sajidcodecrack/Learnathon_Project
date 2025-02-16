"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../pages/auth/Firebase";
import { Sun, Moon, ShoppingCart, Menu, Search, Camera } from "lucide-react";
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

  // Track user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // Apply dark mode styling
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="fixed top-0 w-full py-4 px-4 md:px-8 lg:px-32 flex items-center justify-between z-50 border-b-2 bg-background/80 backdrop-blur-lg">
      {/* Logo */}
      <h1 className="text-3xl font-black font-praise text-muted-foreground">
        FairBasket<span className="text-primary">.</span>
      </h1>

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
                      <a href="./" className="block p-6 bg-gradient-to-b from-muted/50 to-muted rounded-md">
                        <div className="mb-2 mt-4 text-lg font-medium">Featured Products</div>
                        <p className="text-sm text-muted-foreground">Check out our latest items</p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {[
                    { name: "Electronics", link: "/categories/electronics" },
                    { name: "Clothing", link: "/categories/clothing" },
                    { name: "Home & Garden", link: "/categories/home" },
                  ].map(({ name, link }) => (
                    <li key={name}>
                      <NavigationMenuLink asChild>
                        <a href={link}>{name}</a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-64 bg-muted"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Icons */}
        <Button variant="ghost" size="icon" aria-label="Camera">
          <Camera className="h-5 w-5" />
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          <span>Cart</span>
        </Button>

        {/* Authentication */}
        {user ? (
          <Button onClick={handleLogout} variant="destructive">Logout</Button>
        ) : (
          <Button onClick={() => navigate("/login")} variant="default">Sign In</Button>
        )}

        {/* Theme Toggle */}
        <Toggle onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Toggle>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center space-x-4">
        <Button variant="ghost" size="icon" aria-label="Camera">
          <Camera className="h-5 w-5" />
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full">
              <div className="flex-1 py-4">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full mb-4"
                />
                <nav className="space-y-4">
                  {["Products", "About", "Contact"].map((item) => (
                    <Link key={item} to={`/${item.toLowerCase()}`} className="block py-2 hover:underline">
                      {item}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="border-t pt-4">
                <Button variant="outline" className="w-full mb-2">
                  <ShoppingCart className="h-5 w-5 mr-2" /> Cart
                </Button>
                {user ? (
                  <Button onClick={handleLogout} variant="destructive" className="w-full">Logout</Button>
                ) : (
                  <Button onClick={() => navigate("/login")} variant="default" className="w-full">Sign In</Button>
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
