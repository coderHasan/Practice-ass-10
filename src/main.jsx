import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AuthProvider from "./utils/provider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
