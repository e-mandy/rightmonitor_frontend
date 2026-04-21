import clsx from "clsx";
import { KTIcon } from "../../../icons";
// import { toAbsoluteUrl } from "../../../helpers";
import { useLang, setLanguage } from "../../../i18n/Metronici18n";
import France from "./france.svg";
import US from "./united-states.svg";

type Props = {
  toggleBtnClass?: string;
  toggleBtnIconClass?: string;
  menuPlacement?: string;
  menuTrigger?: string;
};

const languages = [
  {
    lang: "en",
    name: "English",
    flag: US,
  },
  {
    lang: "fr",
    name: "French",
    flag: France,
  },
];

const Languages = ({
  toggleBtnClass = "",
  menuPlacement = "bottom-end",
  menuTrigger = "{default: 'click', lg: 'hover'}",
}: Props) => {
  const lang = useLang();
  const currentLanguage = languages.find((x) => x.lang === lang);

  return (
    <>
      {/* begin::Menu toggle */}
      <a
        href="#"
        className={clsx(
          "btn btn-icon  btn-custom btn-icon-muted w-auto h-35px h-md-40px px-2 ",
          toggleBtnClass,
        )}
        data-kt-menu-trigger={menuTrigger}
        data-kt-menu-attach="parent"
        data-kt-menu-placement={menuPlacement}
      >
        <div className="d-flex align-items-center">
          <img
            className="w-15px h-15px me-2"
            style={{ borderRadius: 2 }}
            src={currentLanguage?.flag}
            alt="metronic"
          />

          <div className="d-none d-sm-none d-md-block">
            {currentLanguage?.name}
          </div>

          <KTIcon iconName="down" className="ms-2" />
        </div>
      </a>
      {/* begin::Menu toggle */}

      {/* begin::Menu */}
      <div
        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-semibold py-4 fs-base w-175px"
        data-kt-menu="true"
      >
        {languages.map((l) => (
          <div className={"menu-item px-3 my-0"} key={l.lang}>
            <a
              href="#"
              className={clsx("menu-link px-3 py-2", {
                active: l.lang === currentLanguage?.lang,
              })}
              onClick={() => {
                setLanguage(l.lang);
              }}
            >
              <span className="symbol symbol-20px me-4">
                <img className="rounded-1" src={l.flag} alt="metronic" />
              </span>
              <span className="menu-title">{l.name}</span>
            </a>
          </div>
        ))}
      </div>
      {/* end::Menu */}
    </>
  );
};

export { Languages };
