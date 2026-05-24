import { Link } from "react-router-dom";
import { Button } from "../ui/button";


function PublicNav() {
    return (
        <header className="w-full border-b bg-background">

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* LEFT */}
                <Link
                    to="/"
                    className="text-4xl font-bold tracking-tight text-blue-700"
                >
                    ProChat
                </Link>

                {/* CENTER */}
                <nav className="hidden items-center gap-10 md:flex">

                    <Link
                        to="/features"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Features
                    </Link>

                    <Link
                        to="/solutions"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Solutions
                    </Link>

                    <Link
                        to="/pricing"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Pricing
                    </Link>

                </nav>

                {/* RIGHT */}
                <div className="flex items-center gap-4">

                    <Button
                        className="rounded-xl px-6"
                    >
                        Get Started
                    </Button>

                </div>

            </div>

        </header>
    );
}

export default PublicNav;