import React from 'react'
import Hero from './components/Hero'
import Nav from '../../components/Nav/Nav'
import Bento from './components/Bento'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 }
}

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Nav/>
      <Hero/>
      <Bento/>
      
      {/* Featured Products Section */}
      <motion.section 
        className="py-16 px-4 sm:px-8 md:px-16 lg:px-32"
        {...fadeIn}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {[1, 2, 3, 4].map((item) => (
            <motion.div 
              key={item} 
              variants={staggerItem}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Product Name</h3>
                <p className="text-gray-600 text-sm mb-2">Short description of the product</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">$99.99</span>
                  <motion.button 
                    className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary-dark transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Special Offers Section */}
      <motion.section 
        className="bg-gradient-to-r from-primary to-primary-dark text-white py-16"
        {...fadeIn}
      >
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div 
              className="lg:w-1/2 mb-8 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
              <p className="text-lg mb-6">Get up to 50% off on your first purchase!</p>
              <motion.button 
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.button>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full max-w-md h-64 bg-white/10 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Customer Reviews Section */}
      <motion.section 
        className="py-16 px-4 sm:px-8 md:px-16 lg:px-32"
        {...fadeIn}
      >
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item} 
              variants={staggerItem}
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="font-semibold">Customer Name</h3>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"Great experience shopping here! The prices are competitive and the quality is excellent."</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className="bg-gray-100 py-16"
        {...fadeIn}
      >
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest deals and updates</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full border focus:outline-none focus:border-primary flex-1 max-w-md"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button 
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-gray-400">Your trusted destination for quality groceries and household essentials.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Shop</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Categories</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Deals</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="/" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="/" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Your E-commerce Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index