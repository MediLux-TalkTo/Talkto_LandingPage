import { Link, NavLink, useLocation } from "react-router-dom";
import talkToLogo from "../assets/logo/talkto-logo.svg";

const navigationItems = [
  {
    label: "작동 방식",
    href: "/#how-it-works",
  },
  {
    label: "앱 체험",
    href: "/#service-preview",
  },
  {
    label: "사전예약",
    href: "/reservation",
  },
  {
    label: "기억 아카이브",
    href: "/#archive",
  },
  {
    label: "FAQ",
    href: "/#faq",
  },
];

function Header() {
  const location = useLocation();
  const isReservationPage = location.pathname === "/reservation";

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-t-2 border-[#75CFFF] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:px-12 xl:px-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          aria-label="TalkTo 메인으로 이동"
        >
          <img
            src={talkToLogo}
            alt="TalkTo"
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navigationItems.map((item) => {
            const isReservation = item.href === "/reservation";

            if (isReservation) {
              return (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-[14px] font-medium transition-colors ${
                      isActive
                        ? "font-bold text-[#20C986]"
                        : "text-[#6E6864] hover:text-[#20C986]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                className="text-[14px] font-medium text-[#6E6864] transition-colors hover:text-[#20C986]"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Reservation button */}
        {!isReservationPage ? (
          <Link
            to="/reservation"
            className="inline-flex h-[42px] items-center justify-center rounded-full bg-gradient-to-r from-[#32CFC0] to-[#76D65B] px-6 text-[14px] font-bold text-white shadow-[0_4px_12px_rgba(34,201,134,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_7px_16px_rgba(34,201,134,0.3)]"
          >
            사전 등록하기
          </Link>
        ) : (
          <div className="w-[120px]" aria-hidden="true" />
        )}
      </div>
    </header>
  );
}

export default Header;
