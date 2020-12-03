import React from "react"
import * as S from "./styled"
import links from "../MenuInnerHeader/contents"
import { Link } from "gatsby"
import Search from "../Search"

const MenuMobile = () => (
  <S.MenuWrapper>
    <div className="container">
      <div className="content">
        <nav role="navigation">
          <div id="menuToggle">
            <input id="checkToggle" type="checkbox" style={{ color: "var(--texto)" }} />
            <span id="menuIcon"></span>
            <span id="menuIcon"></span>
            <span id="menuIcon"></span>
            <ul id="menu">
              {links.map((link, i) => (
                <li key={i}>
                  <input id="checkToggle" type="checkbox" style={{ width: "200px" }} />
                  <S.Title>{link.label}</S.Title>
                  <ul id="submenu">
                    {link.submenu.map((sublink, i) => (
                      <li key={i}>
                        <Link
                          to={sublink.url}
                          style={{
                            fontWeight: "700",
                            color: "var(--sublinks)",
                          }}
                        >
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <div style={{
                marginTop: "2rem" 
              }}>
                <Search />
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </S.MenuWrapper>
)

export default MenuMobile
