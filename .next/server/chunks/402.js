"use strict";
exports.id = 402;
exports.ids = [402];
exports.modules = {

/***/ 1402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/common/Header2/Header.js




// import '/styles/Home.module.css'

function Header() {
    const router = (0,router_.useRouter)();
    // Function to check if a link is active
    const isActive = (href)=>{
        return router.pathname === href;
    };
    const [isOnClick, setIsOnClick] = (0,external_react_.useState)(false);
    const [isMenuOnClick, setIsMenuOnclick] = (0,external_react_.useState)(false);
    const handleoOnClick = ()=>{
        setIsOnClick(!isOnClick);
    };
    const handleOnclickMenu = ()=>{
        setIsMenuOnclick(!isMenuOnClick);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                fluid: true,
                className: " py-0 d-lg-block d-none",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    className: "p-0 py-3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        class: "navbar-brand",
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                            src: "/fuzhio_logo.png",
                                            width: 130
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                className: "d-flex flex-column justify-content-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                    className: "d-flex flex-row flex-wrap gap-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            className: "text-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: `custom-header-style ${isActive("/") ? "active-link" : ""}`,
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            className: "text-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/about",
                                                className: `custom-header-style ${isActive("/about") ? "active-link" : ""}`,
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            className: "text-center position-relative p-0",
                                            md: 2,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                    className: "p-0 hover-ourwork p-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "",
                                                        className: `custom-header-style our-work-af ${isActive("/our-work") ? "active-link" : ""}`,
                                                        children: "Our Work"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "p-0 our-work-element pt-3",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                                        className: "p-0 ",
                                                        style: {
                                                            width: "180px",
                                                            left: "11px",
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            zIndex: "100"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                                className: "p-0 text-left pt-1",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/agriculture",
                                                                    className: "custom-header-style p-0 border border-0",
                                                                    children: "Agriculture"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                                className: "p-0 text-left py-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/noble-plastic",
                                                                    className: "custom-header-style border border-0",
                                                                    children: "Noble Plastic"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                                className: "p-0 text-left",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/community-engagement",
                                                                    className: "custom-header-style border border-0",
                                                                    children: "Community Engagement"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            md: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/fuzhio-covid-response",
                                                className: `custom-header-style ${isActive("/fuzhio-covid-response") ? "active-link" : ""}`,
                                                children: "Fuzhio & Covid Response"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            className: "text-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/blog",
                                                className: `custom-header-style ${isActive("/blog") ? "active-link" : ""}`,
                                                children: "Blog"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                fluid: true,
                className: "d-lg-none d-block",
                style: {
                    zIndex: "100"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "d-flex flex-row justify-content-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                className: "p-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    class: "navbar-brand",
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                        src: "/fuzhio_logo.png",
                                        width: 130
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                className: "d-flex flex-row align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        className: "d-flex flex-row flex-wrap justify-content-center",
                                        onClick: handleoOnClick,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                            src: "/nav-bar_mob.svg",
                                            alt: "nav_bar",
                                            width: 25,
                                            className: "bg-dark p-1"
                                        })
                                    })
                                ]
                            }),
                            isOnClick && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                className: "position-absolute p-0 w-100 mt-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                    className: "mt-5 bg-white p-0 ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            className: " p-3 px-4 p-0 border-bottom",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: "text-decoration-none text-dark",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            className: " p-3 px-4 p-0 border-bottom",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/about",
                                                className: "text-decoration-none text-dark",
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            className: "p-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                    className: "p-3 px-4 p-0 border-bottom",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                        className: "p-0",
                                                        onClick: handleOnclickMenu,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "",
                                                            className: "text-decoration-none text-dark our-work-af-mob",
                                                            children: "Our Work"
                                                        })
                                                    })
                                                }),
                                                isMenuOnClick && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                                    className: "p-0",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                            className: " p-3 px-4 p-0 border-bottom",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/agriculture",
                                                                className: "text-decoration-none text-dark",
                                                                children: "> Agriculture"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                            className: " p-3 px-4 p-0 border-bottom",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/noble-plastic",
                                                                className: "text-decoration-none text-dark",
                                                                children: ">  Noble Plastic"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                            className: " p-3 px-4 p-0 border-bottom",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/community-engagement",
                                                                className: "text-decoration-none text-dark",
                                                                children: ">  Community Engagement"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            className: " p-3 px-4 p-0 border-bottom",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/fuzhio-covid-response",
                                                className: "text-decoration-none text-dark",
                                                children: "Fuzhio & Covid Response"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            className: " p-3 px-4 p-0 border-bottom",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/blog",
                                                className: "text-decoration-none text-dark",
                                                children: "Blog"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const Header2_Header = (Header);

;// CONCATENATED MODULE: ./components/common/Header2/index.jsx



const index = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Header2_Header, {})
    });
};
/* harmony default export */ const Header2 = (index);


/***/ })

};
;