import clsx from "clsx";

const Container = ({ as: Component = "div", className, children }) => {
  return (
    <Component
      className={clsx("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
    >
      <div className="w-full mx-auto">{children}</div>
    </Component>
  );
};

export default Container;
