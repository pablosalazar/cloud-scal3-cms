"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronUp, Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface MenuItemChild {
  href: string;
  label: string;
}

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItemChild[];
}

const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    children: [
      { href: "/finops-center", label: "FinOps Center" },
      { href: "/agent-bills", label: "Agent Bills" },
    ],
  },
  {
    label: "Services",
    children: [
      { href: "/finops-center-quickstart", label: "FinOps Center QuickStart" },
      { href: "/aws-agentic-products", label: "AWS Agentic Products" },
      { href: "/aws-marketplace-advisory", label: "AWS Marketplace Advisory" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
];

export function NavMenu() {
  const pathname = usePathname();

  // Normalize pathname by removing trailing slash (except for root)
  const normalizedPathname =
    pathname === "/" ? pathname : pathname.replace(/\/$/, "");

  // Check if current path matches item or any of its children
  const isActiveItem = (item: MenuItem): boolean => {
    if (item.href && normalizedPathname === item.href) {
      return true;
    }
    if (item.children) {
      return item.children.some((child) => normalizedPathname === child.href);
    }
    return false;
  };

  // Check if child item is active
  const isActiveChild = (href: string): boolean => {
    return normalizedPathname === href;
  };

  return (
    <nav aria-label="Main" className="flex items-center gap-2">
      <div className="hidden md:flex items-center gap-14 justify-between">
        {menuItems.map((item) => {
          const isActive = isActiveItem(item);

          return (
            <div
              key={item.href || item.label}
              className={item.children ? "relative group" : "nav-item"}
            >
              {item.children ? (
                // Dropdown item
                <>
                  <div
                    className={`flex items-center gap-3 font-medium text-lg cursor-pointer transition-colors duration-300 whitespace-nowrap hover:text-[#97F4BA] ${
                      isActive ? "text-[#97F4BA]" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronUp className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </div>
                  <div className="absolute top-10 left-0 bg-[#2D2F31] border border-[#404040] rounded-lg py-2 min-w-[200px] shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-[1001] opacity-0 invisible -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block py-3 px-5 text-white no-underline font-medium transition-all duration-300 hover:bg-[rgba(151,244,186,0.1)] hover:text-[#97F4BA] hover:pl-6 ${
                          isActiveChild(child.href)
                            ? "!text-[#97F4BA] !bg-[rgba(151,244,186,0.1)]"
                            : ""
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                // Simple link
                <Link
                  href={item.href!}
                  className={`font-medium text-lg cursor-pointer transition-colors duration-300 whitespace-nowrap hover:text-[#97F4BA] no-underline text-inherit ${
                    isActive ? "!text-[#97F4BA]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild className="border-0">
            <button
              className="inline-flex items-center justify-center rounded-md hover:bg-white/5"
              aria-label="Open menu"
            >
              <Menu />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-80 bg-[#151515] text-white p-0 border-l-0"
          >
            <SheetHeader className="p-6 pb-0">
              <SheetTitle className="text-xl font-semibold text-[#97F4BA] text-left">
                Navigation
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col p-6 pt-8">
              <div className="flex flex-col gap-6">
                {menuItems.map((item) => {
                  const isActive = isActiveItem(item);

                  return (
                    <div
                      key={item.href || item.label}
                      className="flex flex-col"
                    >
                      {item.children ? (
                        // Dropdown section for mobile
                        <div>
                          <div
                            className={`text-lg font-medium mb-3 ${
                              isActive ? "text-[#97F4BA]" : "text-white"
                            }`}
                          >
                            {item.label}
                          </div>
                          <div className="flex flex-col gap-2 ml-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`text-base py-2 px-3 rounded-md transition-all duration-300 hover:bg-[rgba(151,244,186,0.1)] hover:text-[#97F4BA] ${
                                  isActiveChild(child.href)
                                    ? "!text-[#97F4BA] !bg-[rgba(151,244,186,0.1)]"
                                    : "text-gray-300"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        // Simple link for mobile
                        <Link
                          href={item.href!}
                          className={`text-lg font-medium py-2 px-3 rounded-md transition-all duration-300 hover:bg-[rgba(151,244,186,0.1)] hover:text-[#97F4BA] ${
                            isActive
                              ? "!text-[#97F4BA] !bg-[rgba(151,244,186,0.1)]"
                              : "text-white"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
