import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import India from "./pages/india";
import World from "./pages/world";

const pages = [
  {
    name: "India",
    element: <India />,
  },
  {
    name: "World",
    element: <World />,
  },
];

function computePagePath(name: string) {
  return name.toLowerCase();
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              pages={pages.map((page) => ({
                name: page.name,
                path: computePagePath(page.name),
              }))}
            />
          }
        >
          {pages.map((page, index) => (
            <Route
              key={page.name}
              index={index === 0}
              path={computePagePath(page.name)}
              element={page.element}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
