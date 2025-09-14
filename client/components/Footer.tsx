import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D1115] text-white mt-16">
      <div className="mx-auto max-w-6xl px-[120px] py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
          <img src="https://cdn.builder.io/api/v1/image/assets%2F54858901b0c442e6a38e6cc906052164%2F462b12e4225140b88803a67447d747f3?format=webp&width=800" alt="Foody" className="w-9 h-9" />
          <div className="text-2xl font-extrabold">Foody</div>
        </div>
        <p className="text-sm text-gray-300 mt-3">
          Enjoy homemade flavors & chef’s signature dishes, freshly prepared every day. Order online or visit our nearest branch.
        </p>
        <div className="mt-6 text-sm font-semibold text-gray-200">Follow on Social Media</div>
        <div className="flex gap-3 mt-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-full border border-gray-700 grid place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white"><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12H21l-1 3.9h-2v7A10 10 0 0022 12z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full border border-gray-700 grid place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm5.2-.9a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1zM12 10a2 2 0 11-2 2 2 2 0 012-2z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-10 w-10 rounded-full border border-gray-700 grid place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v13H0zM7.5 8h4.7v1.7h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8.1V21h-5v-6.1c0-1.5 0-3.4-2-3.4-2 0-2.3 1.5-2.3 3.3V21h-5V8z"/></svg>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="h-10 w-10 rounded-full border border-gray-700 grid place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white"><path d="M16 3h2v2a4 4 0 004 4v2h-2v-2a2 2 0 01-2-2V7h-2V3zM9 8a7 7 0 107 7v-2a5 5 0 11-5-5V8z"/></svg>
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
