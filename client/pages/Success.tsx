import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenCart={() => {}} />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-3xl font-extrabold mb-4">Thank you!</h1>
          <p className="text-muted-foreground mb-6">Your order has been placed successfully.</p>
          <div className="space-x-3">
            <Link to="/orders" className="inline-block px-6 py-2 bg-red-600 text-white rounded-full">View Orders</Link>
            <Link to="/" className="inline-block px-6 py-2 border rounded-full">Back to Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
