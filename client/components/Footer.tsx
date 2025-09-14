import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D1115] text-white mt-16">
      <div className="mx-auto max-w-6xl px-[120px] py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="text-2xl font-extrabold">Foody</div>
          <p className="text-sm text-gray-300 mt-3">
            Enjoy homemade flavors & chef’s signature dishes, freshly prepared every day. Order online or visit our nearest branch.
          </p>
          <div className="mt-6 text-sm font-semibold text-gray-200">Follow on Social Media</div>
          <div className="flex gap-3 mt-3">
            <a aria-label="Facebook" className="h-10 w-10 rounded-full border border-gray-700 grid place-items-center">
              <img src="/icons/facebook.svg" alt="facebook" className="w-4 h-4" />
            </a>
            <a aria-label="Instagram" className="h-10 w-10 rounded-full border border-gray-700 grid place-items-center">
              <img src="/icons/instagram.svg" alt="instagram" className="w-4 h-4" />
            </a>
            <a aria-label="LinkedIn" className="h-10 w-10 rounded-full border border-gray-700 grid place-items-center">
              <img src="/icons/linkedin.svg" alt="linkedin" className="w-4 h-4" />
            </a>
            <a aria-label="TikTok" className="h-10 w-10 rounded-full border border-gray-700 grid place-items-center">
              <img src="/icons/tiktok.svg" alt="tiktok" className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-3">Explore</div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/?q=">All Food</Link>
            </li>
            <li>
              <Link to="/?q=Nearby">Nearby</Link>
            </li>
            <li>
              <Link to="/?q=Discount">Discount</Link>
            </li>
            <li>
              <Link to="/?q=Best Seller">Best Seller</Link>
            </li>
            <li>
              <Link to="/?q=Delivery">Delivery</Link>
            </li>
            <li>
              <Link to="/?q=Lunch">Lunch</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-3">Help</div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">How to Order</a>
            </li>
            <li>
              <a href="#">Payment Methods</a>
            </li>
            <li>
              <a href="#">Track My Order</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
