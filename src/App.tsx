import { useEffect } from "react";

import "./App.css";

const App = (): JSX.Element => {
  useEffect(() => {
    const labels = document.querySelectorAll<HTMLLabelElement>(
      ".form-control label"
    );

    labels.forEach((label: HTMLLabelElement) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter: string, index: number) =>
            `<span style="transition-delay:${index * 50}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  return (
    <div className="container">
      <h1>Please Login</h1>
      <form>
        <div className="form-control">
          <input type="text" required />
          <label>Email</label>
        </div>

        <div className="form-control">
          <input type="password" required />
          <label>Password</label>
        </div>

        <button className="btn">Login</button>

        <p className="text">
          Don't have an account? <a href="/">Register</a>
        </p>
      </form>
    </div>
  );
}

export default App;
