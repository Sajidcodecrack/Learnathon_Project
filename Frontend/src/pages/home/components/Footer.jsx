import React from 'react';

function Footer() {
  return (
    <footer className="bg-background text-foreground pt-16 pb-8">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">About Us</h3>
            <p className="text-muted-foreground">
              Your trusted destination for quality groceries and household essentials.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-foreground transition-colors">Shop</a></li>
              <li><a href="/" className="hover:text-foreground transition-colors">Categories</a></li>
              <li><a href="/" className="hover:text-foreground transition-colors">Deals</a></li>
              <li><a href="/" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Customer Service</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="/" className="hover:text-foreground transition-colors">Returns</a></li>
              <li><a href="/" className="hover:text-foreground transition-colors">Shipping Info</a></li>
              <li><a href="/" className="hover:text-foreground transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Connect With Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-foreground transition-colors">Facebook</a></li>
              <li><a href="/" className="hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="/" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="/" className="hover:text-foreground transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Your E-commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
