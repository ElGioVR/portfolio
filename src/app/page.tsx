import Main from "./components/Main";
import ClientOnly from "./components/ClientOnly";

export default function Home() {
  return (
    <ClientOnly>
      <Main />
    </ClientOnly>
  );
}
