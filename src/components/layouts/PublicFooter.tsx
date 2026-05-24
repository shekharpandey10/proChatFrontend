import { Link } from "react-router-dom";

function PublicFooter() {
    return (
        <footer className="w-full border-t bg-background">

            <div className="mx-auto flex flex-col items-center justify-between gap-6 px-6 py-10 text-sm md:flex-row lg:max-w-7xl lg:px-8">

                {/* LEFT */}
                <div>
                    <h2 className="text-2xl font-bold text-foreground">
                        ProChat
                    </h2>
                </div>

                {/* CENTER */}
                <div className="flex items-center gap-8 text-muted-foreground">

                    <Link
                        to="/privacy"
                        className="transition-colors hover:text-foreground"
                    >
                        Privacy Policy
                    </Link>

                    <Link
                        to="/terms"
                        className="transition-colors hover:text-foreground"
                    >
                        Terms of Service
                    </Link>

                    <Link
                        to="/help"
                        className="transition-colors hover:text-foreground"
                    >
                        Help Center
                    </Link>

                </div>

                {/* RIGHT */}
                <div className="text-muted-foreground">
                    © 2026 ProChat Suite. All rights reserved.
                </div>

            </div>

        </footer>
    );
}

export default PublicFooter;