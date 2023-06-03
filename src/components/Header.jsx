import { useNavigate } from "react-router-dom";
import Button from "./forms/Button";
import DropDown from "./forms/DropDown";
import DropDownLabel from "./forms/DropDownLabel";
import Svg from "./parts/Svg";
import List from "./forms/List";

const Header = () => {
  const navigate = useNavigate();
  const btnClassName =
    "btn btn-xs btn-block bg-slate-50/50 border-0 hover:bg-slate-50/50 no-animation text-white font-light";
  const onLogout = () => {
    console.log("log me out");
    sessionStorage.clear();
    navigate("/login");
  };
  const dropDownList = [
    { name: "Profile", href: "#", icon: "" },
    { name: "Settings", href: "#", icon: "" },
    { name: "Logout", href: "#", icon: "", onClick: onLogout },
  ];
  return (
    <>
      <header className="w-full drop-shadow-[0_1px_0px_rgba(225,225,225,0.25)]">
        <div className=" flex flex-row justify-center content-center bg-fuchsia-950 shadow">
          <div className="w-1/5"></div>
          <div className="flex-1 my-auto">
            <Button
              type={"button"}
              label={"Search avion School"}
              labelClass={"ms-2 capitalize"}
              className={btnClassName}
            >
              <Svg className={"w-4 h-4"}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </Svg>
            </Button>
          </div>
          <div className="w-1/5 flex justify-end">
            <DropDown className={"dropdown-hover z-50"}>
              <DropDownLabel labelClass={"btn-circle btn-ghost text-white"}>
                <Svg className={"w-8 h-8"}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </Svg>
              </DropDownLabel>
              <div
                tabIndex={0}
                className="card compact dropdown-content mt-1 shadow rounded-box bg-slate-900 text-white"
              >
                <div className="card-body">
                  <h4 className="text-sm">Help?</h4>
                  <p className="w-20">
                    <small className="text-slate-400 me-1">Press</small> F1
                  </p>
                </div>
              </div>
            </DropDown>

            <DropDown className={""}>
              <DropDownLabel labelClass={"btn-ghost btn-square"}>
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content mask mask-squircle w-8">
                    <span>MX</span>
                  </div>
                </div>
              </DropDownLabel>
              <List
                className={
                  "menu-compact dropdown-content mt-1 p-2 shadow rounded-box w-52 bg-slate-900  text-white"
                }
                list={dropDownList}
              ></List>
            </DropDown>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
