import { BookClosed, BookOpen01, Codepen, FileCode01, LifeBuoy01, PlayCircle, Stars02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { NavMenuItemLink } from "./base-components/nav-menu-item";
import { FeatureCardVertical } from "./base-components/nav-menu-item-card";

export const DropdownMenuSimpleWithFooter = () => {
    const items = [
        {
            title: "Blog",
            subtitle: "The latest industry new and guides curated by our expert team.",
            href: "/blog",
            Icon: BookClosed,
        },
        {
            title: "Customer stories",
            subtitle: "Learn how our customers are using Untitled UI to 10x their growth.",
            href: "/customer-stories",
            Icon: Stars02,
        },
        {
            title: "Video tutorials",
            subtitle: "Get up and running on our newest features and in-depth guides.",
            href: "/tutorials",
            Icon: PlayCircle,
        },
        {
            title: "Documentation",
            subtitle: "In-depth articles on our tools and technologies to empower teams.",
            href: "/docs",
            Icon: FileCode01,
        },
        {
            title: "Help and support",
            subtitle: "Need help with something? Our expert team is here to help 24/7.",
            href: "/help",
            Icon: LifeBuoy01,
        },
    ];

    return (
        <div className="px-3 pb-2 md:max-w-84 md:p-0">
            <nav className="overflow-hidden rounded-xl bg-secondary shadow-xs ring-1 ring-secondary_alt md:rounded-2xl md:shadow-lg">
                <ul className="flex flex-col gap-0.5 rounded-xl bg-primary py-2 ring-1 ring-secondary md:rounded-t-2xl md:p-2">
                    {items.map(({ title, subtitle, href, Icon }) => (
                        <li key={title}>
                            <NavMenuItemLink icon={Icon} title={title} subtitle={subtitle} href={href} />
                        </li>
                    ))}
                </ul>
                <div className="px-4 py-5 text-center sm:px-5">
                    <Button href="#" color="link-color" size="lg">
                        All resources
                    </Button>
                </div>
            </nav>
        </div>
    );
};

export const DropdownMenuFeatureCard = () => {
    const items = [
        { title: "Blog", subtitle: "The latest industry new and guides curated by our expert team.", href: "/", Icon: BookClosed },
        {
            title: "Customer stories",
            subtitle: "Learn how our customers are using Untitled UI to 10x their growth.",
            href: "/",
            Icon: Stars02,
        },
        {
            title: "Video tutorials",
            subtitle: "Get up and running on our newest features and in-depth guides.",
            href: "/",
            Icon: PlayCircle,
        },
        {
            title: "Documentation",
            subtitle: "In-depth articles on our tools and technologies to empower teams.",
            href: "/",
            Icon: FileCode01,
        },
    ];

    return (
        <div className="px-3 pb-2 md:max-w-160 md:p-0">
            <nav className="flex flex-col overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-secondary_alt md:w-max md:flex-row md:rounded-2xl md:shadow-lg">
                <ul className="flex flex-1 flex-col gap-0.5 pt-2 pb-3 md:p-2">
                    {items.map(({ title, subtitle, href, Icon }) => (
                        <li key={title + href}>
                            <NavMenuItemLink icon={Icon} title={title} subtitle={subtitle} href={href} />
                        </li>
                    ))}
                </ul>
                <div className="bg-secondary px-1 pt-2 pb-3 md:max-w-76 md:px-2">
                    <FeatureCardVertical
                        href="#"
                        imgSrc="https://www.untitledui.com/marketing/smiling-girl.webp"
                        title="We've just released an update!"
                        description="Check out the all new dashboard view. Pages now load up to 3x faster."
                        actionsContent={
                            <div className="inline-flex gap-3">
                                <Button color="link-gray" size="sm">
                                    Dismiss
                                </Button>
                                <Button color="link-color" size="sm">
                                    Changelog
                                </Button>
                            </div>
                        }
                    />
                </div>
            </nav>
        </div>
    );
};

export const DropdownMenuWithTwoColsAndLinksAndFooter = () => {
    const items = [
        {
            title: "Resources",
            items: [
                {
                    title: "Blogs",
                    subtitle: "The latest industry new and guides curated by our expert team.",
                    href: "/",
                    Icon: BookClosed,
                },
                {
                    title: "Customer stories",
                    subtitle: "Learn how our customers are using Untitled UI to 10x their growth.",
                    href: "/",
                    Icon: Stars02,
                },
                {
                    title: "Video tutorials",
                    subtitle: "Get up and running on our newest features and in-depth guides.",
                    href: "/",
                    Icon: PlayCircle,
                },
            ],
        },
        {
            title: "Support",
            items: [
                {
                    title: "Documentation",
                    subtitle: "In-depth articles on our tools and technologies to empower teams.",
                    href: "/",
                    Icon: FileCode01,
                },
                {
                    title: "Help and support",
                    subtitle: "Need help with something? Our expert team is here to help 24/7.",
                    href: "/",
                    Icon: LifeBuoy01,
                },
                {
                    title: "API reference",
                    subtitle: "In-depth reference doc and helpful guides for our API.",
                    href: "/",
                    Icon: Codepen,
                },
            ],
        },
    ];

    return (
        <div className="px-3 pb-2 md:max-w-200 md:p-0">
            <nav className="overflow-hidden rounded-xl bg-secondary shadow-xs ring-1 ring-secondary_alt md:rounded-2xl md:shadow-lg">
                <div className="flex flex-col gap-5 rounded-xl bg-primary pt-4 pb-5 ring-1 ring-secondary md:gap-6 md:rounded-t-2xl md:p-6 md:pt-5">
                    <div className="flex flex-col gap-1 px-4 md:p-0">
                        <p className="text-md font-semibold text-primary">Resources</p>
                        <p className="text-sm text-tertiary">Get started and learn more about our products.</p>
                    </div>

                    <div className="flex flex-col gap-5 md:flex-row md:gap-8 md:py-0">
                        <div className="-mb-px flex flex-col gap-4 border-b border-b-secondary px-4 pb-5 md:mb-0 md:gap-5 md:border-none md:p-0">
                            <h3 className="text-sm font-semibold text-brand-tertiary">Get started</h3>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { title: "Setup 101", href: "#" },
                                    { title: "Adding users", href: "#" },
                                    { title: "Video tutorials", href: "#" },
                                    { title: "Libraries and SDKs", href: "#" },
                                    { title: "Adding plugins", href: "#" },
                                    { title: "Dashboard templates", href: "#" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button href={item.href} color="link-gray" size="lg">
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-2">
                            {items.map((nav) => (
                                <div key={nav.title}>
                                    <h3 className="mb-2 px-4 text-sm font-semibold text-brand-tertiary md:px-0">{nav.title}</h3>
                                    <ul className="flex flex-col gap-0.5">
                                        {nav.items.slice(0, 3).map(({ title, subtitle, href, Icon }) => (
                                            <li key={title}>
                                                <NavMenuItemLink icon={Icon} title={title} subtitle={subtitle} href={href} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex max-w-container flex-col px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6">
                    <Button href="#" color="secondary" size="md" iconLeading={BookOpen01} className="hidden md:flex">
                        Documentation
                    </Button>
                    <Button href="#" color="primary" size="md" className="hidden md:flex">
                        View all resources
                    </Button>
                    <Button href="#" color="primary" size="sm" className="md:hidden">
                        View all resources
                    </Button>
                </div>
            </nav>
        </div>
    );
};
