import React from "react";
import env from "../../config/env";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error: any;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, info: any) {
    console.error("Erro capturado no ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      const isProd = env.NODE_ENV === "production";

      return (
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#ffe5e5",
            color: "#b00020",
            borderRadius: "8px",
            fontFamily: "sans-serif"
          }}
        >
          <h2>⚠ Ocorreu um erro na aplicação</h2>
          {isProd ? (
            <p>Tente novamente mais tarde.</p>
          ) : (
            <>
              <p><strong>Mensagem:</strong> {this.state.error?.message || String(this.state.error)}</p>
              <p> <strong>Stack:</strong></p>
              <pre style={{ whiteSpace: "pre-wrap" }}>
                {this.state.error?.stack || "Sem stack disponível"}
              </pre>
            </>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
