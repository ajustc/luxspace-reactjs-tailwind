import useModalDOM from "./../helpers/hooks/useModalDOM";
import useScrollToTop from "./../helpers/hooks/useScrollToTop";
import useScrollAnchor from "./../helpers/hooks/useScrollAnchor";

export default function Document({ children }) {
  useModalDOM();
  useScrollToTop();
  useScrollAnchor();
  console.log({children});
  return children;
}
