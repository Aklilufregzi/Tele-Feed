import "./../styles/globals.css";
import Navbar from "./navbar";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>

      <body>
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        {children}
      </body>
    </html>
  );
}
