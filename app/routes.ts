import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("layouts/main.tsx", [
    route("tour", "routes/tour.tsx"),
    route("presskit", "routes/presskit.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("*", "routes/$.tsx")
  ]),
] satisfies RouteConfig;