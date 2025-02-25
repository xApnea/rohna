import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("layouts/main.tsx", [
    route("shows", "routes/shows.tsx"),
    route("epk", "routes/presskit.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("healthcheck", "routes/healthcheck.tsx"),
    route("*", "routes/$.tsx")
  ]),
] satisfies RouteConfig;