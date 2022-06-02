export const Container = ({ children, ...rest }) => (
  <div className="container" {...rest}>
    {children}
  </div>
);
