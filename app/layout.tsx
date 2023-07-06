import "./globals.css";

import Link from "next/link";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <h1>Content</h1>
        {children}
        <h1>Links</h1>
        <table>
          <thead>
            <tr>
              <th>hard navigation</th>
              <th>
                next <pre>{`<Link>`}</pre>
              </th>
              <th>notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="/">/</a>
              </td>
              <td>
                <Link href="/">/</Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="/home">/home</a>
              </td>
              <td>
                <Link href="/home">/home</Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="/home/nested">/home/nested</a>
              </td>
              <td>
                <Link href="/home/nested">/home/nested</Link>
              </td>
              <td>
                Infinite Refresh with Hard Navigation, but not with Next Link
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
