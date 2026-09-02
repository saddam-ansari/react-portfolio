import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Portfolio rendering error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center">
                    <div>
                        <p className="text-sm font-medium text-slate-500">
                            Something went wrong
                        </p>

                        <h1 className="mt-3 text-2xl font-semibold text-white">
                            The portfolio couldn't be loaded.
                        </h1>

                        <button
                            type="button"
                            onClick={() => window.location.reload()}
                            className="mt-6 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-400"
                        >
                            Reload page
                        </button>
                    </div>
                </main>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;